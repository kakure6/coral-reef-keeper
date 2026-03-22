import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '../../base44Client.js';

const STATUS_OPTIONS = ['受付中', '準備中', '発送済み', '完了', 'キャンセル'];
const STATUS_COLOR = {
  '受付中':    'bg-blue-100 text-blue-700',
  '準備中':    'bg-yellow-100 text-yellow-700',
  '発送済み':  'bg-violet-100 text-violet-700',
  '完了':      'bg-emerald-100 text-emerald-700',
  'キャンセル': 'bg-slate-100 text-slate-500',
};

function fmt(iso) {
  if (!iso) return '-';
  return new Date(iso).toLocaleString('ja-JP', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
  });
}

export default function Admin() {
  const qc                        = useQueryClient();
  const [tab, setTab]             = useState('orders');
  const [expandedId, setExpanded] = useState(null);

  const { data: orders = [], isLoading: loadingOrders } = useQuery({
    queryKey: ['admin-orders'],
    queryFn:  () => base44.adminEntities.Order.list('-created_date'),
  });

  const { data: corals = [], isLoading: loadingCorals } = useQuery({
    queryKey: ['corals'],
    queryFn:  () => base44.entities.Coral.list('-created_date'),
  });

  const updateStatus = useMutation({
    mutationFn: ({ id, status }) => base44.adminEntities.Order.update(id, { status }),
    onSuccess:  () => qc.invalidateQueries({ queryKey: ['admin-orders'] }),
  });

  const deleteOrder = useMutation({
    mutationFn: (id) => base44.adminEntities.Order.delete(id),
    onSuccess:  () => qc.invalidateQueries({ queryKey: ['admin-orders'] }),
  });

  const purchaseOrders = orders.filter(o => o.coral_name);

  // 顧客一覧（注文からメールでグループ化）
  const customers = Object.values(
    purchaseOrders.reduce((acc, o) => {
      const email = o.user_email ?? '不明';
      if (!acc[email]) acc[email] = { email, name: o.customer_name ?? '-', orders: [] };
      acc[email].orders.push(o);
      return acc;
    }, {})
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🔧</span>
        <h1 className="text-2xl font-bold text-slate-800">管理者ダッシュボード</h1>
        <span className="ml-auto bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">ADMIN</span>
      </div>

      {/* サマリー */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: '総注文数',       value: purchaseOrders.length,                                       color: 'text-cyan-700' },
          { label: '未処理',         value: purchaseOrders.filter(o => o.status === '受付中').length,    color: 'text-orange-600' },
          { label: '登録顧客数',     value: customers.length,                                            color: 'text-violet-700' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-2xl shadow-sm p-5 text-center">
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
            <p className="text-slate-400 text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* タブ */}
      <div className="flex gap-1 mb-4 bg-slate-100 rounded-xl p-1 w-fit">
        {[{ key: 'orders', label: '注文管理' }, { key: 'customers', label: '顧客一覧' }, { key: 'corals', label: '商品管理' }].map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${tab === t.key ? 'bg-white shadow text-slate-800' : 'text-slate-500 hover:text-slate-700'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 注文管理 */}
      {tab === 'orders' && (
        <div className="flex flex-col gap-3">
          {loadingOrders ? <p className="text-slate-400">読み込み中...</p> :
           purchaseOrders.length === 0 ? <p className="text-slate-400">注文がありません</p> :
           purchaseOrders.map(o => (
            <div key={o.id} className="bg-white rounded-2xl shadow-sm p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_COLOR[o.status] ?? 'bg-slate-100 text-slate-600'}`}>{o.status ?? '受付中'}</span>
                    <span className="text-xs text-slate-400">{fmt(o.created_date)}</span>
                  </div>
                  <p className="font-semibold text-slate-800 mt-1">{o.coral_name} × {o.quantity}</p>
                  <p className="text-cyan-700 font-bold">¥{Number(o.total_price ?? 0).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => setExpanded(expandedId === o.id ? null : o.id)}
                  className="text-xs text-slate-400 hover:text-slate-600 shrink-0"
                >
                  {expandedId === o.id ? '▲ 閉じる' : '▼ 詳細'}
                </button>
              </div>

              {expandedId === o.id && (
                <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-1 gap-2 text-sm">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-600">
                    <span className="text-slate-400">顧客名</span><span>{o.customer_name ?? '-'}</span>
                    <span className="text-slate-400">メール</span><span className="break-all">{o.user_email ?? '-'}</span>
                    <span className="text-slate-400">電話番号</span><span>{o.customer_phone ?? '-'}</span>
                    <span className="text-slate-400">配送先</span><span className="whitespace-pre-wrap">{o.shipping_address ?? '-'}</span>
                    <span className="text-slate-400">備考</span><span>{o.note ?? '-'}</span>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="text-slate-400 text-xs self-center">ステータス変更：</span>
                    {STATUS_OPTIONS.map(s => (
                      <button
                        key={s}
                        onClick={() => updateStatus.mutate({ id: o.id, status: s })}
                        className={`text-xs px-3 py-1 rounded-full border transition ${o.status === s ? 'bg-cyan-600 text-white border-cyan-600' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                      >
                        {s}
                      </button>
                    ))}
                    <button
                      onClick={() => { if (confirm('この注文を削除しますか？')) deleteOrder.mutate(o.id); }}
                      className="text-xs px-3 py-1 rounded-full border border-red-200 text-red-500 hover:bg-red-50 ml-auto"
                    >
                      削除
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 顧客一覧 */}
      {tab === 'customers' && (
        <div className="flex flex-col gap-3">
          {customers.length === 0 ? <p className="text-slate-400">顧客がいません</p> :
           customers.map(c => (
            <div key={c.email} className="bg-white rounded-2xl shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-800">{c.name}</p>
                  <p className="text-slate-400 text-sm">{c.email}</p>
                </div>
                <span className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full">{c.orders.length}件の注文</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 商品管理 */}
      {tab === 'corals' && (
        <div className="bg-white rounded-2xl shadow-sm p-4">
          {loadingCorals ? <p className="text-slate-400">読み込み中...</p> :
           corals.length === 0 ? <p className="text-slate-400 text-sm">商品がありません</p> : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400 border-b">
                  <th className="pb-2 font-medium">商品名</th>
                  <th className="pb-2 font-medium">カテゴリ</th>
                  <th className="pb-2 font-medium text-right">価格</th>
                  <th className="pb-2 font-medium text-right">在庫</th>
                </tr>
              </thead>
              <tbody>
                {corals.map(c => (
                  <tr key={c.id} className="border-b last:border-0">
                    <td className="py-2 text-slate-700">{c.name}</td>
                    <td className="py-2 text-slate-500">{c.category ?? '-'}</td>
                    <td className="py-2 text-right text-cyan-700 font-medium">¥{Number(c.price ?? 0).toLocaleString()}</td>
                    <td className="py-2 text-right text-slate-500">{c.stock ?? '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
