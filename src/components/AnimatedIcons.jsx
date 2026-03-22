/**
 * AnimatedIcons.jsx
 * CSS アニメーション付き SVG アイコン集（絵文字なし・青系デザイン）
 */

import React from 'react';

/* ────────────────────────────────────────────────────────────
   ナビゲーション用アイコン（小さめ・シンプル）
──────────────────────────────────────────────────────────── */

/** 水槽アイコン：水面が揺れるアニメーション */
export function AquariumNavIcon({ active }) {
  const color = active ? '#0891b2' : '#94a3b8';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* タンク外枠 */}
      <rect x="2" y="4" width="20" height="16" rx="2" />
      {/* 水面ライン（揺れる） */}
      <path strokeDasharray="3 2" className={active ? 'nav-wave-active' : 'nav-wave'}>
        <animate attributeName="d"
          values="M2 14 Q7 12 12 14 Q17 16 22 14;M2 14 Q7 16 12 14 Q17 12 22 14;M2 14 Q7 12 12 14 Q17 16 22 14"
          dur="3s" repeatCount="indefinite" />
      </path>
      {/* 泡 */}
      <circle cx="8" cy="17" r="1" fill={color} stroke="none">
        <animate attributeName="cy" values="17;9;17" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="16" cy="17" r="0.8" fill={color} stroke="none">
        <animate attributeName="cy" values="17;10;17" dur="2s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" begin="0.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/** ショップアイコン：キラリと光るアニメーション */
export function ShopNavIcon({ active }) {
  const color = active ? '#0891b2' : '#94a3b8';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 L3 6 v1 a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0 V6 L18 2 Z" />
      <path d="M3 7 v13 a2 2 0 0 0 2 2 h14 a2 2 0 0 0 2-2 V7" />
      <path d="M9 22 V12 h6 v10" />
    </svg>
  );
}

/** 注文アイコン：フタが開くアニメーション */
export function OrderNavIcon({ active }) {
  const color = active ? '#0891b2' : '#94a3b8';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" rx="1" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}

/** 管理アイコン：ゆっくり回転 */
export function AdminNavIcon({ active }) {
  const color = active ? '#0891b2' : '#94a3b8';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={{ animation: active ? 'spin-slow 8s linear infinite' : 'none' }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   空状態 装飾アイコン（大きめ・アニメーション派手）
──────────────────────────────────────────────────────────── */

/** 水槽の空状態アイコン */
export function EmptyAquariumIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto mb-4">
      {/* タンク外枠 */}
      <rect x="8" y="16" width="64" height="52" rx="6" stroke="#bae6fd" strokeWidth="3" fill="#f0f9ff" />
      {/* 水面 */}
      <path fill="#7dd3fc" opacity="0.4">
        <animate attributeName="d"
          values="M8 48 Q28 44 40 48 Q52 52 72 48 L72 68 Q52 68 40 68 Q28 68 8 68 Z;M8 48 Q28 52 40 48 Q52 44 72 48 L72 68 Q52 68 40 68 Q28 68 8 68 Z;M8 48 Q28 44 40 48 Q52 52 72 48 L72 68 Q52 68 40 68 Q28 68 8 68 Z"
          dur="4s" repeatCount="indefinite" />
      </path>
      {/* 泡 1 */}
      <circle cx="28" cy="62" r="3" fill="#38bdf8" opacity="0.7">
        <animate attributeName="cy" values="62;24;62" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
        <animate attributeName="r" values="3;1.5;3" dur="3s" repeatCount="indefinite" />
      </circle>
      {/* 泡 2 */}
      <circle cx="52" cy="62" r="2.5" fill="#38bdf8" opacity="0.7">
        <animate attributeName="cy" values="62;28;62" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="r" values="2.5;1;2.5" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      {/* 泡 3 */}
      <circle cx="40" cy="58" r="2" fill="#7dd3fc" opacity="0.6">
        <animate attributeName="cy" values="58;30;58" dur="3.5s" begin="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3.5s" begin="1.5s" repeatCount="indefinite" />
      </circle>
      {/* 砂底 */}
      <ellipse cx="40" cy="68" rx="28" ry="3" fill="#bae6fd" opacity="0.5" />
    </svg>
  );
}

/** 魚のアニメーションアイコン（ComingSoon用） */
export function AnimatedFishIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto mb-4">
      <g style={{ animation: 'fish-swim 3s ease-in-out infinite' }}>
        {/* 魚体 */}
        <ellipse cx="38" cy="40" rx="18" ry="10" fill="#7dd3fc" />
        {/* 尻尾 */}
        <path d="M56 40 L68 30 L68 50 Z" fill="#38bdf8" />
        {/* 目 */}
        <circle cx="26" cy="37" r="3" fill="white" />
        <circle cx="25" cy="37" r="1.5" fill="#0369a1" />
        {/* ヒレ上 */}
        <path d="M36 30 Q40 22 44 30" fill="#38bdf8" />
        {/* 口 */}
        <path d="M20 42 Q18 44 20 46" stroke="#0369a1" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* 泡 */}
        <circle cx="16" cy="38" r="2" fill="none" stroke="#7dd3fc" strokeWidth="1.5">
          <animate attributeName="cx" values="16;8;1" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;0" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="14" cy="42" r="1.5" fill="none" stroke="#7dd3fc" strokeWidth="1">
          <animate attributeName="cx" values="14;6;-1" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.5;0" dur="2.5s" begin="0.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

/** サンゴアイコン（Shop用） */
export function AnimatedCoralIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto mb-4">
      {/* 左のサンゴ */}
      <g style={{ transformOrigin: '22px 64px', animation: 'coral-sway 3s ease-in-out infinite' }}>
        <path d="M22 64 L22 44" stroke="#f472b6" strokeWidth="4" strokeLinecap="round" />
        <path d="M22 52 L14 42" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 48 L30 38" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
        <circle cx="22" cy="42" r="4" fill="#fb7185" />
        <circle cx="13" cy="40" r="3.5" fill="#fb7185" />
        <circle cx="31" cy="36" r="3.5" fill="#fb7185" />
      </g>
      {/* 右のサンゴ */}
      <g style={{ transformOrigin: '54px 64px', animation: 'coral-sway 3s ease-in-out infinite reverse' }}>
        <path d="M54 64 L54 48" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
        <path d="M54 56 L44 46" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
        <path d="M54 52 L64 42" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="54" cy="46" r="4" fill="#7dd3fc" />
        <circle cx="43" cy="44" r="3.5" fill="#7dd3fc" />
        <circle cx="65" cy="40" r="3.5" fill="#7dd3fc" />
      </g>
      {/* 中央のサンゴ */}
      <g style={{ transformOrigin: '38px 64px', animation: 'coral-sway 4s ease-in-out infinite 0.5s' }}>
        <path d="M38 64 L38 36" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" />
        <path d="M38 46 L28 34" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" />
        <path d="M38 42 L48 30" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="38" cy="34" r="5" fill="#a5b4fc" />
        <circle cx="27" cy="32" r="4" fill="#a5b4fc" />
        <circle cx="49" cy="28" r="4" fill="#a5b4fc" />
      </g>
      {/* 砂底 */}
      <ellipse cx="40" cy="66" rx="32" ry="4" fill="#bae6fd" opacity="0.4" />
    </svg>
  );
}

/** カートアイコン（Orders空状態用） */
export function EmptyCartIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto mb-4">
      {/* カゴ本体 */}
      <path d="M16 24 h48 l-6 28 H22 Z" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="2.5" strokeLinejoin="round" />
      {/* ハンドル */}
      <path d="M10 16 H20 L28 52" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* タイヤ */}
      <circle cx="28" cy="60" r="5" fill="#7dd3fc">
        <animate attributeName="r" values="5;5.5;5" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="52" cy="60" r="5" fill="#7dd3fc">
        <animate attributeName="r" values="5;5.5;5" dur="1.5s" begin="0.75s" repeatCount="indefinite" />
      </circle>
      {/* カゴ内の線 */}
      <line x1="30" y1="30" x2="32" y2="48" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.6" />
      <line x1="40" y1="28" x2="40" y2="48" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.6" />
      <line x1="50" y1="30" x2="48" y2="48" stroke="#7dd3fc" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   ボタン用アイコン（小）
──────────────────────────────────────────────────────────── */
export function EditIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

export function TrashIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}
