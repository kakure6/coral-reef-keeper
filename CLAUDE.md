# Coral Reef Keeper
## 技術スタック
- React + Vite + Tailwind + shadcn/ui
- Firebase Firestore（データ層）
- react-query（@tanstack/react-query）

## 最新変更（2026-03-22）
### Google認証 & Login ページ追加
- **新規追加**: `src/pages/Login.jsx` - Google Sign-In UI
  - Googleロゴ付きログインボタン
  - セキュリティメッセージ: 「水槽の水質データはあなたのアカウントに安全に保存されます。」
  - エラーハンドリング対応

### AuthContext.jsx 大幅拡張
- Firebase Authentication の完全実装
- `signInWithGoogle()` メソッド追加
- ユーザー状態管理（loading, user, auth）

### Admin.jsx ページ追加
- 管理者機能ページ（新規作成）

### base44Client.js 強化
- エラーハンドリング改善
- リトライロジック実装

### セキュリティ & デプロイ
- `firebase.json` 追加
- `firestore.rules` セキュリティルール追加
- `worker/` Cloud Functions ディレクトリ追加

### UI/UX の細部調整
- Tailwind CSS の詳細なスタイル調整
- グラデーション背景実装
- レスポンシブ対応強化

## ルール
- 実装前に日本語で計画を説明すること
- base44.entities.X の API形状は維持すること
