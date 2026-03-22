import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { base44 } from '../../base44Client.js';

const TANK_TYPES = ['リーフタンク', 'フィッシュオンリー', '混合'];

function AquariumModal({ initial, onSave, onClose, isPending }) {
  const [name, setName] = useState(initial?.name ?? '');
  const [volume, setVolume] = useState(initial?.volume_liters ?? '');
  const [type, setType] = useState(initial?.type ?? '');
  const [error, setError] = useState('');
  const isEdit = !!initial;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl" onClick={e => e.stopPropagation()}>
        <h2 className="font-bold text-lg text-slate-700 mb-4">{isEdit ? '水槽を編集' : '新しい水槽を追加'}</h2>
        <div className="flex flex-col gap-3">
          <input className="border rounded-lg px-3 py-2 text-sm" placeholder="水槽名 *" value={name} onChange={e => setName(e.target.value)} />
          <input className="border rounded-lg px-3 py-2 text-sm" type="number" placeholder="容量 (リットル)" value={volume} onChange={e => setVolume(e.target.value)} />
          <select className="border rounded-lg px-3 py-2 text-sm text-slate-600" value={type} onChange={e => setType(e.target.value)}>
            <option value="">タイプを選択...</option>
            {TANK_TYPES.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
        {error && <p className="text-red-500 text-xs mt-3">{error}</p>}
        <div className="flex gap-3 mt-5">
          <button onClick={onClose} disabled={isPending} className="flex-1 border rounded-lg py-2 text-sm text-slate-500">キャンセル</button>
          <button
            onClick={() => {
              if (!name.trim()) { setError('水槽名は必須です'); return; }
              onSave({ name, volume_liters: volume ? Number(volume) : undefined, type: type || undefined });
            }}
            disabled={!name || isPending}
            className="flex-1 bg-cyan-600 text-white rounded-lg py-2 text-sm font-medium disabled:opacity-40">
            {isPending ? '保存中...' : isEdit ? '保存する' : '追加する'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Aquariums() {
  const qc = useQueryClient();
  const [showAdd, setShowAdd] = useState(false);
  const [editTarget, setEditTarget] = useState(null); // 編集対象のaquarium

  const { data: aquariums = [], isLoading } = useQuery({
    queryKey: ['aquariums'],
    queryFn: () => base44.entities.Aquarium.list(),
  });

  const add = useMutation({
    mutationFn: (data) => base44.entities.Aquarium.create(data),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['aquariums'] }); setShowAdd(false); },
  });

  const update = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Aquarium.update(id, data),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['aquariums'] }); setEditTarget(null); },
  });

  const remove = useMutation({
    mutationFn: (id) => base44.entities.Aquarium.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['aquariums'] }),
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {showAdd && (
        <AquariumModal
          onSave={(data) => add.mutate(data)}
          onClose={() => setShowAdd(false)}
          isPending={add.isPending}
        />
      )}
      {editTarget && (
        <AquariumModal
          initial={editTarget}
          onSave={(data) => update.mutate({ id: editTarget.id, data })}
          onClose={() => setEditTarget(null)}
          isPending={update.isPending}
        />
      )}

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">水槽管理</h1>
          <p className="text-slate-400 text-sm mt-1">水質を記録・管理できます</p>
        </div>
        <button onClick={() => setShowAdd(true)} className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          水槽を追加
        </button>
      </div>

      {isLoading ? (
        <p className="text-slate-400">読み込み中…</p>
      ) : aquariums.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p className="text-4xl mb-3">🪣</p>
          <p>水槽がまだ登録されていません。</p>
          <button onClick={() => setShowAdd(true)} className="mt-4 text-cyan-600 text-sm hover:underline">水槽を追加する</button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {aquariums.map(a => (
            <div key={a.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition group relative">
              <Link to={`/aquariums/${a.id}`} className="block">
                <h3 className="font-bold text-slate-800 text-lg group-hover:text-cyan-600 transition">{a.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{[a.volume_liters && `${a.volume_liters}L`, a.type].filter(Boolean).join(' · ') || '詳細未設定'}</p>
              </Link>
              <div className="flex gap-3 mt-4 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setEditTarget(a)}
                  className="text-xs text-slate-500 hover:text-cyan-600 transition"
                >
                  ✏️ 編集
                </button>
                <button
                  onClick={() => { if (confirm(`「${a.name}」を削除しますか？\n水質記録・機材データも失われます。`)) remove.mutate(a.id); }}
                  disabled={remove.isPending}
                  className="text-xs text-red-400 hover:text-red-600 transition"
                >
                  🗑️ 削除
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
