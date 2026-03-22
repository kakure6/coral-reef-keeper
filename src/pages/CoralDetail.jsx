import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '../../AuthContext.jsx';
import { base44 } from '../../base44Client.js';

const DIFFICULTY_COLOR = {
  '初心者': 'bg-green-100 text-green-700',
  '中級者': 'bg-yellow-100 text-yellow-700',
  '上級者': 'bg-red-100 text-red-700',
};

export default function CoralDetail() {
  const { id }       = useParams();
  const navigate     = useNavigate();
  const qc           = useQueryClient();
  const { user }     = useAuth();
  const [qty, setQty]                     = useState(1);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [form, setForm] = useState({
    customer_name:    user?.displayName ?? '',
    customer_phone:   '',
    shipping_address: '',
    note:             '',
  });
  const [error, setError] = useState('');

  const { data: corals = [] } = useQuery({
    queryKey: ['corals'],
    queryFn:  () => base44.entities.Coral.list(),
  });
  const coral = corals.find(c => c.id === id);

  const buy = useMutation({
    mutationFn: () => base44.entities.Order.create({
      coral_id:         id,
      coral_name:       coral.name,
      quantity:         qty,
      price:            coral.price,
      total_price:      Number(coral.price) * qty,
      status:           '受付中',
      customer_name:    form.customer_name,
      customer_phone:   form.customer_phone,
      shipping_address: form.shipping_address,
      note:             form.note,
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['orders'] });
      navigate('/orders');
    },
    onError: (e) => setError(e?.message ?? '注文に失敗しました'),
  });

  if (!coral && corals.length > 0) return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center text-slate-400">
      <p>商品が見つかりません。</p>
      <Link to="/shop" className="text-cyan-600 text-sm mt-2 block">ショップに戻る</Link>
    </div>
  );
  if (!coral) return <div className="max-w-3xl mx-auto px-4 py-16 text-center text-slate-400">読み込み中…</div>;

  const soldOut = coral.stock === 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-600 mb-6">
        ← ショップに戻る
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
          {coral.image_url
            ? <img src={coral.image_url} alt={coral.name} className="w-full h-full object-cover" />
            : <div className="w-full h-full flex items-center justify-center text-8xl">🪸</div>}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-wrap">
            {coral.category && <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">{coral.category}</span>}
            {coral.difficulty && <span className={`text-xs px-3 py-1 rounded-full font-medium ${DIFFICULTY_COLOR[coral.difficulty] ?? 'bg-slate-100 text-slate-600'}`}>{coral.difficulty}</span>}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">{coral.name}</h1>
            {coral.species && <p className="text-slate-400 italic text-sm mt-1">{coral.species}</p>}
          </div>

          <p className="text-3xl font-bold text-cyan-700">¥{Number(coral.price ?? 0).toLocaleString()}</p>

          {coral.description && <p className="text-slate-600 text-sm leading-relaxed">{coral.description}</p>}

          {!soldOut && (
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-2 text-slate-600 hover:bg-slate-100 text-lg">-</button>
                <span className="px-4 py-2 font-medium min-w-12 text-center">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 text-lg">+</button>
              </div>
              <span className="text-sm text-slate-400">合計: ¥{(Number(coral.price ?? 0) * qty).toLocaleString()}</span>
            </div>
          )}

          <button
            onClick={() => setShowOrderForm(true)}
            disabled={soldOut}
            className="w-full bg-cyan-600 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 disabled:opacity-40 transition mt-auto"
          >
            {soldOut ? '売り切れ' : '購入手続きへ'}
          </button>
        </div>
      </div>

      {/* 注文フォームモーダル */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4" onClick={() => setShowOrderForm(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
            <h2 className="font-bold text-lg text-slate-700 mb-1">注文情報の入力</h2>
            <p className="text-xs text-slate-400 mb-4">{coral.name} × {qty} — ¥{(Number(coral.price ?? 0) * qty).toLocaleString()}</p>

            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs text-slate-500 mb-1 block">お名前 *</label>
                <input
                  className="border rounded-lg px-3 py-2 text-sm w-full"
                  value={form.customer_name}
                  onChange={e => setForm(f => ({ ...f, customer_name: e.target.value }))}
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">メールアドレス</label>
                <input
                  className="border rounded-lg px-3 py-2 text-sm w-full bg-slate-50 text-slate-500"
                  value={user?.email ?? ''}
                  readOnly
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">電話番号</label>
                <input
                  className="border rounded-lg px-3 py-2 text-sm w-full"
                  value={form.customer_phone}
                  onChange={e => setForm(f => ({ ...f, customer_phone: e.target.value }))}
                  placeholder="090-0000-0000"
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">配送先住所 *</label>
                <textarea
                  className="border rounded-lg px-3 py-2 text-sm w-full"
                  rows={3}
                  value={form.shipping_address}
                  onChange={e => setForm(f => ({ ...f, shipping_address: e.target.value }))}
                  placeholder="〒000-0000&#10;東京都..."
                />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">備考</label>
                <input
                  className="border rounded-lg px-3 py-2 text-sm w-full"
                  value={form.note}
                  onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                  placeholder="ご要望など（任意）"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-xs mt-3">{error}</p>}

            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowOrderForm(false)} className="flex-1 border rounded-lg py-2 text-sm text-slate-500">キャンセル</button>
              <button
                onClick={() => buy.mutate()}
                disabled={!form.customer_name || !form.shipping_address || buy.isPending}
                className="flex-1 bg-cyan-600 text-white rounded-lg py-2 text-sm font-medium disabled:opacity-40"
              >
                {buy.isPending ? '注文中...' : '注文を確定する'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
