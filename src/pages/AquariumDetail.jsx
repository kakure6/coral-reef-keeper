import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { base44 } from '../../base44Client.js';

const WATER_PARAMS = [
  { key: 'temperature', label: '水温',  unit: '°C' },
  { key: 'salinity',    label: 'S.G.',  unit: 'ppt' },
  { key: 'ph',          label: 'pH',    unit: '' },
  { key: 'calcium',     label: 'Ca',    unit: 'ppm' },
  { key: 'alkalinity',  label: 'KH',    unit: '' },
  { key: 'magnesium',   label: 'Mg',    unit: 'ppm' },
  { key: 'nitrate',     label: 'NO₃',   unit: 'ppm' },
  { key: 'phosphate',   label: 'PO₄',   unit: 'ppm' },
  { key: 'ammonia',     label: 'NH₃',   unit: 'ppm' },
  { key: 'nitrite',     label: 'NO₂',   unit: 'ppm' },
];

function WaterLogModal({ aquariumId, onClose }) {
  const qc = useQueryClient();
  const [form, setForm] = useState({ temperature: '', salinity: '', ph: '', calcium: '', alkalinity: '', magnesium: '', nitrate: '', phosphate: '', ammonia: '', nitrite: '' });
  const [error, setError] = useState('');
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const add = useMutation({
    mutationFn: () => base44.entities.WaterLog.create({
      aquarium_id: aquariumId,
      ...Object.fromEntries(Object.entries(form).filter(([, v]) => v !== '').map(([k, v]) => [k, Number(v)])),
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['waterLogs', aquariumId] });
      onClose();
    },
    onError: (e) => setError(e?.message || '保存に失敗しました'),
  });

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl" onClick={e => e.stopPropagation()}>
        <h2 className="font-bold text-lg text-slate-700 mb-4">水質記録</h2>
        <div className="grid grid-cols-2 gap-3">
          {WATER_PARAMS.map(({ key, label, unit }) => (
            <div key={key}>
              <label className="text-xs text-slate-500 mb-1 block">{label}{unit && ` (${unit})`}</label>
              <input type="number" className="border rounded-lg px-3 py-2 text-sm w-full" placeholder="-"
                value={form[key]} onChange={e => set(key, e.target.value)} />
            </div>
          ))}
        </div>
        {error && <p className="text-red-500 text-xs mt-3">{error}</p>}
        <div className="flex gap-3 mt-5">
          <button onClick={onClose} disabled={add.isPending} className="flex-1 border rounded-lg py-2 text-sm text-slate-500">キャンセル</button>
          <button onClick={() => add.mutate()} disabled={add.isPending}
            className="flex-1 bg-cyan-600 text-white rounded-lg py-2 text-sm font-medium disabled:opacity-60">
            {add.isPending ? '保存中...' : '記録する'}
          </button>
        </div>
      </div>
    </div>
  );
}

function WaterGraph({ logs, aquariumId }) {
  const qc = useQueryClient();
  const [param, setParam] = useState('temperature');

  const remove = useMutation({
    mutationFn: (id) => base44.entities.WaterLog.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['waterLogs', aquariumId] }),
  });
  const data = [...logs].reverse().map(l => ({
    date: l.created_date?.slice(5, 10),
    value: l[param],
  })).filter(d => d.value != null);

  const p = WATER_PARAMS.find(p => p.key === param);

  return (
    <div>
      <h3 className="font-semibold text-slate-600 mb-3">水質推移グラフ</h3>
      <div className="flex gap-1 flex-wrap mb-4">
        {WATER_PARAMS.map(p => (
          <button key={p.key} onClick={() => setParam(p.key)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition ${param === p.key ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
            {p.label}
          </button>
        ))}
      </div>
      {data.length === 0 ? (
        <p className="text-slate-400 text-sm text-center py-8">データがありません</p>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} unit={p?.unit} />
            <Tooltip formatter={(v) => [`${v}${p?.unit}`, p?.label]} />
            <Line type="monotone" dataKey="value" stroke="#0891b2" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      )}
      {logs.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-slate-600 mb-2">記録履歴</h4>
          <table className="w-full text-xs text-slate-600">
            <thead><tr className="border-b">{['日付', ...WATER_PARAMS.map(p => p.label), ''].map(h => <th key={h} className="text-left py-1 pr-2 font-medium">{h}</th>)}</tr></thead>
            <tbody>
              {logs.slice(0, 10).map(l => (
                <tr key={l.id} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="py-1 pr-2">{l.created_date?.slice(5, 10)}</td>
                  {WATER_PARAMS.map(p => <td key={p.key} className="py-1 pr-2">{l[p.key] ?? '-'}</td>)}
                  <td className="py-1">
                    <button
                      onClick={() => { if (confirm('この記録を削除しますか？')) remove.mutate(l.id); }}
                      className="text-red-400 hover:text-red-600 transition"
                      disabled={remove.isPending}
                    >削除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const EQUIPMENT_CATEGORIES = ['添加剤', '薬品', 'フード', '試薬', '水槽機材', 'その他'];
const EQUIPMENT_UNITS = ['ml', 'g', '錠'];

function calcDaysLeft(eq) {
  if (!eq.total_volume || !eq.usage_per_dose || !eq.logs_total) return null;
  const remaining = eq.total_volume - (eq.logs_total || 0);
  if (remaining <= 0) return 0;
  if (!eq.usage_per_dose) return null;
  return Math.floor(remaining / eq.usage_per_dose);
}

function EquipmentTab({ aquariumId }) {
  const qc = useQueryClient();
  const today = new Date().toISOString().slice(0, 10);
  const [form, setForm] = useState({ name: '', category: '添加剤', total_volume: '', unit: 'ml', usage_per_dose: '', purchase_date: today });
  const setF = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const { data: equipment = [] } = useQuery({
    queryKey: ['equipment', aquariumId],
    queryFn: () => base44.entities.Equipment.filter({ aquarium_id: aquariumId }),
  });
  const { data: equipLogs = [] } = useQuery({
    queryKey: ['equipmentLogs', aquariumId],
    queryFn: () => base44.entities.EquipmentLog.filter({ aquarium_id: aquariumId }),
  });

  const equipWithUsage = equipment.map(eq => {
    const used = equipLogs.filter(l => l.equipment_id === eq.id).reduce((s, l) => s + (l.amount || 0), 0);
    return { ...eq, logs_total: used };
  });

  const add = useMutation({
    mutationFn: () => base44.entities.Equipment.create({
      aquarium_id: aquariumId,
      name: form.name,
      category: form.category,
      total_volume: form.total_volume ? Number(form.total_volume) : undefined,
      unit: form.unit,
      usage_per_dose: form.usage_per_dose ? Number(form.usage_per_dose) : undefined,
      purchase_date: form.purchase_date || undefined,
    }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['equipment', aquariumId] }); setForm({ name: '', category: '添加剤', total_volume: '', unit: 'ml', usage_per_dose: '', purchase_date: today }); },
  });

  const logUse = useMutation({
    mutationFn: ({ eq }) => base44.entities.EquipmentLog.create({
      aquarium_id: aquariumId,
      equipment_id: eq.id,
      amount: eq.usage_per_dose,
      unit: eq.unit,
    }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['equipmentLogs', aquariumId] }),
  });

  const remove = useMutation({
    mutationFn: (id) => base44.entities.Equipment.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['equipment', aquariumId] }),
  });

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <input className="border rounded-lg px-3 py-2 text-sm col-span-2" placeholder="機材名 *" value={form.name} onChange={e => setF('name', e.target.value)} />
        <select className="border rounded-lg px-3 py-2 text-sm" value={form.category} onChange={e => setF('category', e.target.value)}>
          {EQUIPMENT_CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <select className="border rounded-lg px-3 py-2 text-sm" value={form.unit} onChange={e => setF('unit', e.target.value)}>
          {EQUIPMENT_UNITS.map(u => <option key={u}>{u}</option>)}
        </select>
        <input type="number" className="border rounded-lg px-3 py-2 text-sm" placeholder="総量" value={form.total_volume} onChange={e => setF('total_volume', e.target.value)} />
        <input type="number" className="border rounded-lg px-3 py-2 text-sm" placeholder="1回あたりの使用量" value={form.usage_per_dose} onChange={e => setF('usage_per_dose', e.target.value)} />
        <input type="date" className="border rounded-lg px-3 py-2 text-sm col-span-2" value={form.purchase_date} onChange={e => setF('purchase_date', e.target.value)} />
      </div>
      <button onClick={() => add.mutate()} disabled={!form.name || add.isPending} className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-40 mb-4">追加</button>
      {equipWithUsage.length === 0 ? <p className="text-slate-400 text-sm">機材がありません</p> : (
        <div className="grid gap-3">
          {equipWithUsage.map(e => {
            const used = e.logs_total || 0;
            const pct = e.total_volume ? Math.min(100, Math.round((used / e.total_volume) * 100)) : null;
            const daysLeft = calcDaysLeft(e);
            return (
              <div key={e.id} className="p-3 bg-slate-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-slate-700 text-sm">{e.name}</p>
                    <p className="text-xs text-slate-400">{e.category} · {e.unit}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    {e.usage_per_dose && (
                      <button onClick={() => logUse.mutate({ eq: e })} className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded-md hover:bg-cyan-200">使用</button>
                    )}
                    <button onClick={() => remove.mutate(e.id)} className="text-xs text-red-400 hover:text-red-600">削除</button>
                  </div>
                </div>
                {pct !== null && (
                  <div>
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>使用: {used}{e.unit} / {e.total_volume}{e.unit}</span>
                      {daysLeft !== null && <span className={daysLeft <= 14 ? 'text-orange-500 font-medium' : ''}>{daysLeft <= 0 ? '残量なし' : `あと約${daysLeft}日`}</span>}
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all ${pct >= 80 ? 'bg-orange-400' : 'bg-cyan-500'}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function GrowthTab({ aquariumId }) {
  const qc = useQueryClient();
  const [coralName, setCoralName] = useState('');
  const [size, setSize] = useState('');
  const [note, setNote] = useState('');

  const { data: growths = [] } = useQuery({
    queryKey: ['coralGrowth', aquariumId],
    queryFn: () => base44.entities.CoralGrowth.filter({ aquarium_id: aquariumId }, '-created_date'),
  });

  const add = useMutation({
    mutationFn: () => base44.entities.CoralGrowth.create({ aquarium_id: aquariumId, coral_name: coralName, size_cm: Number(size), notes: note }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['coralGrowth', aquariumId] }); setCoralName(''); setSize(''); setNote(''); },
  });

  return (
    <div>
      <div className="flex gap-3 mb-4 flex-wrap">
        <input className="border rounded-lg px-3 py-2 text-sm flex-1 min-w-24" placeholder="サンゴ名" value={coralName} onChange={e => setCoralName(e.target.value)} />
        <input type="number" className="border rounded-lg px-3 py-2 text-sm w-28" placeholder="サイズ (cm)" value={size} onChange={e => setSize(e.target.value)} />
        <input className="border rounded-lg px-3 py-2 text-sm flex-1 min-w-24" placeholder="メモ" value={note} onChange={e => setNote(e.target.value)} />
        <button onClick={() => add.mutate()} disabled={!coralName || !size} className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-40">記録</button>
      </div>
      {growths.length === 0 ? <p className="text-slate-400 text-sm">成長記録がありません</p> : (
        <div className="divide-y">
          {growths.map(g => (
            <div key={g.id} className="py-3 flex gap-4 text-sm">
              <span className="font-medium text-slate-700">{g.coral_name}</span>
              <span className="text-cyan-700 font-medium">{g.size_cm} cm</span>
              {g.notes && <span className="text-slate-400">{g.notes}</span>}
              <span className="ml-auto text-slate-300">{g.created_date?.slice(0, 10)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MaintenanceTab({ aquariumId }) {
  const qc = useQueryClient();
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const { data: alerts = [] } = useQuery({
    queryKey: ['alerts', aquariumId],
    queryFn: () => base44.entities.MaintenanceAlert.filter({ aquarium_id: aquariumId }),
  });

  const add = useMutation({
    mutationFn: () => base44.entities.MaintenanceAlert.create({ aquarium_id: aquariumId, title, due_date: dueDate }),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['alerts', aquariumId] }); setTitle(''); setDueDate(''); },
  });

  const remove = useMutation({
    mutationFn: (id) => base44.entities.MaintenanceAlert.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['alerts', aquariumId] }),
  });

  return (
    <div>
      <div className="flex gap-3 mb-4">
        <input className="border rounded-lg px-3 py-2 text-sm flex-1" placeholder="メンテナンス内容" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="date" className="border rounded-lg px-3 py-2 text-sm" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        <button onClick={() => add.mutate()} disabled={!title} className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-40">追加</button>
      </div>
      {alerts.length === 0 ? <p className="text-slate-400 text-sm">メンテナンス予定がありません</p> : (
        <div className="grid gap-2">
          {alerts.map(a => (
            <div key={a.id} className="flex justify-between items-center p-3 bg-amber-50 border border-amber-100 rounded-lg">
              <div>
                <p className="font-medium text-slate-700 text-sm">{a.title}</p>
                {a.due_date && <p className="text-xs text-amber-600">期限: {a.due_date}</p>}
              </div>
              <button onClick={() => remove.mutate(a.id)} className="text-xs text-red-400 hover:text-red-600">削除</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const TABS = ['水質グラフ', '機材管理', '成長記録', 'メンテ'];

export default function AquariumDetail() {
  const { id } = useParams();
  const qc = useQueryClient();
  const [tab, setTab] = useState(0);
  const [showWaterLog, setShowWaterLog] = useState(false);
  const [aiResult, setAiResult] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const { data: aquariums = [] } = useQuery({ queryKey: ['aquariums'], queryFn: () => base44.entities.Aquarium.list() });
  const aquarium = aquariums.find(a => a.id === id);

  const { data: logs = [] } = useQuery({
    queryKey: ['waterLogs', id],
    queryFn: () => base44.entities.WaterLog.filter({ aquarium_id: id }, '-created_date'),
  });

  const latest = logs[0];

  const [aiError, setAiError] = useState('');

  const handleAI = async () => {
    if (!latest) return;
    setAiLoading(true);
    setAiError('');
    setAiResult('');
    try {
      const params = [
        latest.temperature != null && `水温:${latest.temperature}℃`,
        latest.salinity    != null && `塩分濃度:${latest.salinity}ppt`,
        latest.ph          != null && `pH:${latest.ph}`,
        latest.calcium     != null && `カルシウム:${latest.calcium}ppm`,
        latest.alkalinity  != null && `KH:${latest.alkalinity}`,
        latest.magnesium   != null && `マグネシウム:${latest.magnesium}ppm`,
        latest.nitrate     != null && `硝酸塩:${latest.nitrate}ppm`,
        latest.phosphate   != null && `リン酸:${latest.phosphate}ppm`,
        latest.ammonia     != null && `アンモニア:${latest.ammonia}ppm`,
        latest.nitrite     != null && `亜硝酸:${latest.nitrite}ppm`,
      ].filter(Boolean).join('、');
      const prompt = `海水魚・サンゴ水槽の水質データを分析してください。${params}。問題点と改善アドバイスを日本語で簡潔に教えてください。`;
      const result = await base44.integrations.Core.InvokeLLM({ prompt });
      setAiResult(result || '結果が取得できませんでした。');
    } catch (e) {
      setAiError('AI分析に失敗しました: ' + (e?.message || 'エラー'));
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {showWaterLog && <WaterLogModal aquariumId={id} onClose={() => setShowWaterLog(false)} />}

      <Link to="/aquariums" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-600 mb-4">
        ← 水槽一覧に戻る
      </Link>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{aquarium?.name ?? '…'}</h1>
          {aquarium?.volume_liters && <p className="text-slate-400 text-sm">{aquarium.volume_liters}L</p>}
        </div>
        <button onClick={() => setShowWaterLog(true)} className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          水質記録
        </button>
      </div>

      {/* Latest Water Quality */}
      {latest && (
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-slate-600">最新の水質状態</h2>
            <span className="text-xs text-slate-400">({latest.created_date?.slice(0, 10).replace(/-/g, '/')})</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: '水温', value: latest.temperature, unit: '°C' },
              { label: '塩分濃度', value: latest.salinity, unit: 'ppt' },
              { label: 'アンモニア', value: latest.ammonia, unit: 'ppm' },
              { label: '亜硝酸', value: latest.nitrite, unit: 'ppm' },
            ].map(({ label, value, unit }) => (
              <div key={label} className="text-center">
                <p className="text-xs text-slate-400">{label}</p>
                <p className="font-bold text-slate-700">{value != null ? `${value}${unit}` : '-'}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Advisor */}
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100 rounded-2xl p-5 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold text-cyan-700">AI水質アドバイザー</h2>
          <button onClick={handleAI} disabled={!latest || aiLoading}
            className="bg-cyan-600 text-white px-4 py-1.5 rounded-lg text-sm disabled:opacity-40">
            {aiLoading ? '分析中…' : 'AI分析'}
          </button>
        </div>
        {aiResult && <p className="text-sm text-slate-600 leading-relaxed mt-2 whitespace-pre-wrap">{aiResult}</p>}
        {aiError && <p className="text-sm text-red-500 mt-2">{aiError}</p>}
        {!aiResult && !aiError && !aiLoading && <p className="text-xs text-slate-400">{latest ? 'AI分析ボタンで水質アドバイスを取得できます' : '水質記録後にAI分析が利用できます'}</p>}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="flex border-b">
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)}
              className={`flex-1 py-3 text-sm font-medium transition ${tab === i ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-500 hover:text-slate-700'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="p-5">
          {tab === 0 && <WaterGraph logs={logs} aquariumId={id} />}
          {tab === 1 && <EquipmentTab aquariumId={id} />}
          {tab === 2 && <GrowthTab aquariumId={id} />}
          {tab === 3 && <MaintenanceTab aquariumId={id} />}
        </div>
      </div>
    </div>
  );
}
