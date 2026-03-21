import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '../../base44Client.js';

const DIFFICULTY_COLOR = {
  '初心者': 'bg-green-100 text-green-700',
  '中級者': 'bg-yellow-100 text-yellow-700',
  '上級者': 'bg-red-100 text-red-700',
};

export default function CoralDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [qty, setQty] = useState(1);

  const { data: corals = [] } = useQuery({ queryKey: ['corals'], queryFn: () => base44.entities.Coral.list() });
  const coral = corals.find(c => c.id === id);

  const buy = useMutation({
    mutationFn: () => base44.entities.Order.create({
      coral_id: id,
      coral_name: coral.name,
      quantity: qty,
      price: coral.price,
      total_price: Number(coral.price) * qty,
      status: '受付中',
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['orders'] });
      navigate('/orders');
    },
  });

  if (!coral && corals.length > 0) return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center text-slate-400">
      <p>商品が見つかりません。</p>
      <Link to="/" className="text-cyan-600 text-sm mt-2 block">ショップに戻る</Link>
    </div>
  );

  if (!coral) return <div className="max-w-3xl mx-auto px-4 py-16 text-center text-slate-400">読み込み中…</div>;

  const soldOut = coral.stock === 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-600 mb-6">
        ← ショップに戻る
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden">
          {coral.image_url ? (
            <img src={coral.image_url} alt={coral.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-8xl">🪸</div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 flex-wrap">
            {coral.category && (
              <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">{coral.category}</span>
            )}
            {coral.difficulty && (
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${DIFFICULTY_COLOR[coral.difficulty] ?? 'bg-slate-100 text-slate-600'}`}>
                {coral.difficulty}
              </span>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">{coral.name}</h1>
            {coral.species && <p className="text-slate-400 italic text-sm mt-1">{coral.species}</p>}
          </div>

          <p className="text-3xl font-bold text-cyan-700">¥{Number(coral.price ?? 0).toLocaleString()}</p>

          {coral.description && (
            <p className="text-slate-600 text-sm leading-relaxed">{coral.description}</p>
          )}

          {/* Quantity */}
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
            onClick={() => buy.mutate()}
            disabled={soldOut || buy.isPending}
            className="w-full bg-cyan-600 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 disabled:opacity-40 transition mt-auto"
          >
            {soldOut ? '売り切れ' : buy.isPending ? '処理中…' : '購入する'}
          </button>
        </div>
      </div>
    </div>
  );
}
