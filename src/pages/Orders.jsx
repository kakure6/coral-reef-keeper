import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { base44 } from '../../base44Client.js';

const STATUS_COLOR = {
  '受付中': 'bg-blue-100 text-blue-700',
  '発送済み': 'bg-violet-100 text-violet-700',
  '完了': 'bg-emerald-100 text-emerald-700',
  'キャンセル': 'bg-slate-100 text-slate-500',
};

export default function Orders() {
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: () => base44.entities.Order.list('-created_date'),
  });

  // 購入注文のみ表示（type が 'product' のものを除外）
  const purchaseOrders = orders.filter(o => o.type !== 'product' && o.coral_name);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">注文履歴</h1>

      {isLoading ? (
        <p className="text-slate-400">読み込み中…</p>
      ) : purchaseOrders.length === 0 ? (
        <div className="text-center py-16 text-slate-400">
          <p className="text-4xl mb-3">🛒</p>
          <p>注文履歴がありません。</p>
          <Link to="/" className="mt-4 text-cyan-600 text-sm hover:underline block">ショップを見る</Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {purchaseOrders.map(o => (
            <div key={o.id} className="bg-white rounded-2xl shadow-sm p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-400">
                  {o.created_date ? new Date(o.created_date).toLocaleString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) : ''}
                </span>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${STATUS_COLOR[o.status] ?? 'bg-slate-100 text-slate-600'}`}>
                  {o.status ?? '受付中'}
                </span>
              </div>
              <p className="text-slate-700 font-medium">{o.coral_name} × {o.quantity}</p>
              <p className="text-slate-400 text-sm mt-1">¥{Number(o.price ?? 0).toLocaleString()}</p>
              <div className="border-t mt-3 pt-3 flex justify-end">
                <span className="text-sm text-slate-600">合計: <strong className="text-cyan-700">¥{Number(o.total_price ?? 0).toLocaleString()}</strong></span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
