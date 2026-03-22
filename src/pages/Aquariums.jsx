import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { base44 } from '../../base44Client.js';

export default function Aquariums() {
  const qc = useQueryClient();
  const [showAdd, setShowAdd] = useState(false);

  const { data: aquariums = [], isLoading } = useQuery({
    queryKey: ['aquariums'],
    queryFn: () => base44.entities.Aquarium.list(),
  });

  const add = useMutation({
    mutationFn: (data) => base44.entities.Aquarium.create(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['aquariums'] });
      setShowAdd(false);
    },
  });

  function AddModal() {
    const [name, setName] = useState('');
    const [volume, setVolume] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState('');
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowAdd(false)}>
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl" onClick={e => e.stopPropagation()}>
          <h2 className="font-bold text-lg text-slate-700 mb-4">新しい水槽を追加</h2>
          <div className="flex flex-col gap-3">
            <input className="border rounded-lg px-3 py-2 text-sm" placeholder="水槽名 *" value={name} onChange={e => setName(e.target.value)} />
            <input className="border rounded-lg px-3 py-2 text-sm" type="number" placeholder="容量 (リットル)" value={volume} onChange={e => setVolume(e.target.value)} />
            <select className="border rounded-lg px-3 py-2 text-sm text-slate-600" value={type} onChange={e => setType(e.target.value)}>
              <option value="">タイプを選択...</option>
              <option>リーフタンク</option>
              <option>フィッシュオンリー</option>
              <option>混合</option>
            </select>
          </div>
          {error && <p className="text-red-500 text-xs mt-3">{error}</p>}
          <div className="flex gap-3 mt-5">
            <button onClick={() => setShowAdd(false)} disabled={add.isPending} className="flex-1 border rounded-lg py-2 text-sm text-slate-500">キャンセル</button>
            <button onClick={() => add.mutate({ name, volume_liters: volume ? Number(volume) : undefined, type: type || undefined }, { onError: (e) => setError(e?.message || '保存に失敗しました') })}
              disabled={!name || add.isPending}
              className="flex-1 bg-cyan-600 text-white rounded-lg py-2 text-sm font-medium disabled:opacity-40">
              {add.isPending ? '保存中...' : '追加する'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {showAdd && <AddModal />}

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
            <Link key={a.id} to={`/aquariums/${a.id}`}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition group">
              <h3 className="font-bold text-slate-800 text-lg group-hover:text-cyan-600 transition">{a.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{[a.volume_liters && `${a.volume_liters}L`, a.type].filter(Boolean).join(' · ') || '詳細未設定'}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
