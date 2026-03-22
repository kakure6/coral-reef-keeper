import React from 'react';
import { Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';
import Aquariums     from './pages/Aquariums.jsx';
import AquariumDetail from './pages/AquariumDetail.jsx';
import Login         from './pages/Login.jsx';
import Admin         from './pages/Admin.jsx';
import Terms         from './pages/Terms.jsx';
import { AquariumNavIcon, ShopNavIcon, OrderNavIcon, AdminNavIcon, AnimatedFishIcon } from './components/AnimatedIcons.jsx';

function ComingSoon({ title }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <AnimatedFishIcon />
      <h1 className="text-2xl font-bold text-slate-700 mb-2">{title}</h1>
      <p className="text-slate-400 text-sm">現在準備中です。しばらくお待ちください。</p>
    </div>
  );
}

function RequireAuth({ children }) {
  const { isAuthenticated, isLoadingAuth } = useAuth();
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-400 text-sm">読み込み中...</div>
      </div>
    );
  }
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function RequireAdmin({ children }) {
  const { isAdmin, isLoadingAuth } = useAuth();
  if (isLoadingAuth) return null;
  return isAdmin ? children : <Navigate to="/" replace />;
}

export default function App() {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();

  const navItems = [
    { to: '/',       label: '水槽',     IconComp: AquariumNavIcon, end: true },
    { to: '/shop',   label: 'ショップ', IconComp: ShopNavIcon },
    { to: '/orders', label: '注文',     IconComp: OrderNavIcon },
    ...(isAdmin ? [{ to: '/admin', label: '管理', IconComp: AdminNavIcon }] : []),
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {isAuthenticated && (
        <>
          {/* PC ヘッダー（md以上） */}
          <header className="bg-white border-b border-slate-200 sticky top-0 z-40 hidden md:block">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
              <Link to="/" className="flex items-center gap-2">
                <img src="/coral-reef-keeper/icon-192.png" alt="" className="w-8 h-8 rounded-lg" />
                <span className="font-bold text-base tracking-tight">
                  <span className="text-cyan-600">coral</span>
                  <span className="text-slate-800">-reef-</span>
                  <span className="text-cyan-600">keeper</span>
                </span>
              </Link>
              <nav className="flex gap-1">
                {navItems.map(({ to, label, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-lg text-sm font-medium transition ${
                        isActive ? 'bg-cyan-50 text-cyan-700' : 'text-slate-600 hover:bg-slate-100'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}

              </nav>
              <div className="flex items-center gap-2">
                {user?.photoURL && (
                  <img src={user.photoURL} alt="" className="w-7 h-7 rounded-full" />
                )}
                <span className="text-xs text-slate-500 max-w-[120px] truncate">{user?.displayName}</span>
                <button
                  onClick={logout}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded-lg hover:bg-slate-100 transition"
                >
                  ログアウト
                </button>
              </div>
            </div>
          </header>

          {/* スマホ トップバー */}
          <header className="bg-white border-b border-slate-200 sticky top-0 z-40 md:hidden">
            <div className="px-4 flex items-center justify-between h-12">
              <Link to="/" className="flex items-center gap-1.5">
                <img src="/coral-reef-keeper/icon-192.png" alt="" className="w-7 h-7 rounded-lg" />
                <span className="font-bold text-sm tracking-tight">
                  <span className="text-cyan-600">coral</span>
                  <span className="text-slate-800">-reef-</span>
                  <span className="text-cyan-600">keeper</span>
                </span>
              </Link>
              <div className="flex items-center gap-2">
                {user?.photoURL && (
                  <img src={user.photoURL} alt="" className="w-7 h-7 rounded-full" />
                )}
                <button
                  onClick={logout}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded-lg hover:bg-slate-100 transition"
                >
                  ログアウト
                </button>
              </div>
            </div>
          </header>

          {/* スマホ ボトムナビ */}
          <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 flex">
            {navItems.map(({ to, label, IconComp, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-xs font-medium transition ${
                    isActive ? 'text-cyan-600' : 'text-slate-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <IconComp active={isActive} />
                    {label}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </>
      )}

      {/* ボトムナビ分の余白 */}
      <main className={isAuthenticated ? 'md:pb-0 pb-16' : ''}>
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/terms" element={<Terms />} />

          <Route path="/" element={<RequireAuth><Aquariums /></RequireAuth>} />
          <Route path="/aquariums/:id" element={<RequireAuth><AquariumDetail /></RequireAuth>} />
          <Route path="/shop" element={<RequireAuth><ComingSoon title="ショップ" /></RequireAuth>} />
          <Route path="/orders" element={<RequireAuth><ComingSoon title="注文履歴" /></RequireAuth>} />
          <Route path="/admin" element={<RequireAuth><RequireAdmin><Admin /></RequireAdmin></RequireAuth>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
