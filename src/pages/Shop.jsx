import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { base44 } from '../../base44Client.js';
import { AnimatedCoralIcon } from '../components/AnimatedIcons.jsx';

const CATEGORIES = ['すべて', 'SPS', 'LPS', 'ソフトコーラル', 'イソギンチャク'];
const DIFFICULTY_COLOR = {
  '初心者': 'bg-green-100 text-green-700',
  '中級者': 'bg-yellow-100 text-yellow-700',
  '上級者': 'bg-red-100 text-red-700',
};

function CoralCard({ coral }) {
  const soldOut = coral.stock === 0;
  return (
    <Link to={`/coral/${coral.id}`} className="block bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition group">
      <div className="relative aspect-square bg-slate-100">
        {coral.image_url ? (
          <img src={coral.image_url} alt={coral.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center"><AnimatedCoralIcon /></div>
        )}
        {soldOut && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-sm bg-black/60 px-3 py-1 rounded-full">売り切れ</span>
          </div>
        )}
        {coral.category && (
          <span className="absolute top-2 left-2 text-xs font-medium bg-white/90 text-slate-700 px-2 py-0.5 rounded-full">
            {coral.category}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-800 text-sm leading-snug">{coral.name}</h3>
        {coral.species && <p className="text-xs text-slate-400 italic mt-0.5">{coral.species}</p>}
        <div className="flex items-center justify-between mt-2">
          <span className="text-cyan-700 font-bold">¥{Number(coral.price ?? 0).toLocaleString()}</span>
          {coral.difficulty && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${DIFFICULTY_COLOR[coral.difficulty] ?? 'bg-slate-100 text-slate-600'}`}>
              {coral.difficulty}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [category, setCategory] = useState('すべて');
  const [search, setSearch] = useState('');

  const { data: corals = [], isLoading } = useQuery({
    queryKey: ['corals'],
    queryFn: () => base44.entities.Coral.list(),
  });

  const filtered = corals.filter(c => {
    const matchCat = category === 'すべて' || c.category === category;
    const matchSearch = !search || c.name?.includes(search) || c.species?.includes(search);
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-teal-700 text-white py-16 px-4 text-center">
        <p className="text-cyan-300 text-sm mb-2">美しいサンゴの世界へ</p>
        <h1 className="text-3xl font-bold mb-1">
          CoralReef <span className="text-cyan-300">Shop</span>
        </h1>
        <p className="text-cyan-100 text-sm mt-2">厳選された高品質なサンゴをお届けします</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                category === c ? 'bg-cyan-600 text-white' : 'bg-white text-slate-600 border hover:border-cyan-400'
              }`}
            >
              {c}
            </button>
          ))}
          <input
            className="ml-auto border rounded-full px-4 py-1.5 text-sm outline-none focus:border-cyan-400 w-48"
            placeholder="サンゴを検索..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Grid */}
        {isLoading ? (
          <p className="text-slate-400 text-center py-16">読み込み中…</p>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <AnimatedCoralIcon />
            <p>該当する商品がありません。</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(c => <CoralCard key={c.id} coral={c} />)}
          </div>
        )}
      </div>
    </div>
  );
}
