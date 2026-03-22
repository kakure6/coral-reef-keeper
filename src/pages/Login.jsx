import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext.jsx';

export default function Login() {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithGoogle();
    } catch (e) {
      setError('ログインに失敗しました。もう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm flex flex-col gap-4">

        {/* ── ログインカード ── */}
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
          <img src="/coral-reef-keeper/icon-512.png" alt="Coral Reef Keeper" className="w-24 h-24 mx-auto mb-4 rounded-2xl object-contain aspect-square" />
          <h1 className="text-2xl font-bold text-slate-800 mb-1 tracking-tight">
            <span className="text-cyan-600">coral</span>
            <span className="text-slate-700">-reef-</span>
            <span className="text-cyan-600">keeper</span>
          </h1>
          <p className="text-slate-400 text-sm mb-8">水槽管理・サンゴショップ</p>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 border border-slate-200 rounded-xl py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 transition disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {loading ? 'ログイン中...' : 'Google でログイン'}
          </button>

          {error && <p className="text-red-500 text-xs mt-4">{error}</p>}

          <p className="text-slate-400 text-xs mt-6">
            ログインすることで<Link to="/terms" className="text-cyan-600 hover:underline">利用規約</Link>に同意したものとみなされます。<br />
            水槽の水質データはあなたのアカウントに安全に保存されます。
          </p>
        </div>

        {/* ── ご利用になる前に ── */}
        <div className="bg-white/70 backdrop-blur-sm border border-cyan-100 rounded-2xl px-6 py-5 text-left"
          style={{ animation: 'fade-slide-up 0.6s ease both 0.2s' }}>
          <p className="text-xs font-semibold text-cyan-600 mb-2 tracking-wide uppercase">ご利用になる前に</p>
          <p className="text-slate-500 text-xs leading-relaxed">
            このアプリは、海水魚・サンゴ飼育が好きな初心者が手探りで作ったものです。
            至らない点もたくさんあると思いますが、もし使っていただけると嬉しいです 🙏
          </p>
          <p className="text-slate-500 text-xs leading-relaxed mt-2">
            バグ・ご提案・こんな機能がほしい、などあればお気軽に
            Twitter / Instagram の DM でお知らせください。
            みなさんの声を参考に、少しずつ改善していけたらと思っています。
          </p>
        </div>

        {/* ── 連携解除 ── */}
        <div className="text-center pb-2">
          <a
            href="https://myaccount.google.com/permissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 text-xs hover:text-slate-600 transition underline underline-offset-2"
          >
            Googleアカウントとの連携を解除する
          </a>
        </div>

      </div>
    </div>
  );
}
