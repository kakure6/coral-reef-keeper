import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import CoralDetail from './pages/CoralDetail.jsx';
import Aquariums from './pages/Aquariums.jsx';
import AquariumDetail from './pages/AquariumDetail.jsx';
import Orders from './pages/Orders.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          <Link to="/" className="font-bold text-lg tracking-wide">
            <span className="text-cyan-600">Coral</span>
            <span className="text-slate-700">Reef</span>
          </Link>
          <nav className="flex gap-1">
            {[
              { to: '/', label: 'ショップ', end: true },
              { to: '/aquariums', label: '水槽管理' },
              { to: '/orders', label: '注文履歴' },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive ? 'bg-cyan-50 text-cyan-700' : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/coral/:id" element={<CoralDetail />} />
          <Route path="/aquariums" element={<Aquariums />} />
          <Route path="/aquariums/:id" element={<AquariumDetail />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
    </div>
  );
}
