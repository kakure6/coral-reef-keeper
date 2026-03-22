/**
 * base44Client.js - Firebase Firestore + Auth
 * 認証ユーザーごとにデータを分離。管理者は全データにアクセス可能。
 */

import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore, collection, doc,
  addDoc, updateDoc, deleteDoc,
  getDocs, getDoc, query, where,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const ADMIN_EMAIL = 'kakureandmix@gmail.com';

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

const app       = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage   = getStorage(app);

// ── エンティティ名 → Firestore コレクション名 ────────────────
const COLLECTION_MAP = {
  Aquarium:         'aquariums',
  Coral:            'corals',
  CoralGrowth:      'coralGrowths',
  Equipment:        'equipments',
  EquipmentLog:     'equipmentLogs',
  MaintenanceAlert: 'maintenanceAlerts',
  Order:            'orders',
  WaterLog:         'waterLogs',
};

// 全員が読める公開コレクション（商品カタログ）
const PUBLIC_COLLECTIONS = new Set(['corals']);

// 現在ログイン中のユーザー情報を取得
function currentUser() {
  return getAuth(app).currentUser;
}

function isAdmin() {
  return currentUser()?.email === ADMIN_EMAIL;
}

// ── ソートユーティリティ ──────────────────────────────────────
function sortDocs(docs, sortStr) {
  if (!sortStr) return docs;
  const desc  = sortStr.startsWith('-');
  const field = desc ? sortStr.slice(1) : sortStr;
  return [...docs].sort((a, b) => {
    const av = a[field] ?? '';
    const bv = b[field] ?? '';
    const cmp = av < bv ? -1 : av > bv ? 1 : 0;
    return desc ? -cmp : cmp;
  });
}

// ── エンティティクライアント生成 ────────────────────────────
function createEntityClient(entityName, { adminMode = false } = {}) {
  const colName = COLLECTION_MAP[entityName];
  const isPublic = PUBLIC_COLLECTIONS.has(colName);

  // クエリを構築（ユーザーフィルター適用）
  function buildUserQuery(extraConstraints = []) {
    const user = currentUser();
    const constraints = [...extraConstraints];

    // 管理者モード or 公開コレクションはフィルターなし
    if (!adminMode && !isPublic && !isAdmin() && user) {
      constraints.push(where('user_id', '==', user.uid));
    }

    return constraints.length > 0
      ? query(collection(firestore, colName), ...constraints)
      : query(collection(firestore, colName));
  }

  return {
    async list(sortField) {
      const q    = buildUserQuery();
      const snap = await getDocs(q);
      const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      return sortDocs(docs, sortField);
    },

    async filter(conditions, sortField) {
      if (conditions.id && Object.keys(conditions).length === 1) {
        const docSnap = await getDoc(doc(firestore, colName, conditions.id));
        if (!docSnap.exists()) return [];
        return [{ id: docSnap.id, ...docSnap.data() }];
      }

      const extra = Object.entries(conditions)
        .filter(([key]) => key !== 'id')
        .map(([key, value]) => where(key, '==', value));

      const q    = buildUserQuery(extra);
      const snap = await getDocs(q);
      const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      return sortDocs(docs, sortField);
    },

    async create(data) {
      const user    = currentUser();
      const docData = {
        ...data,
        user_id:      user?.uid ?? null,
        user_email:   user?.email ?? null,
        created_date: new Date().toISOString(),
      };
      const docRef = await addDoc(collection(firestore, colName), docData);
      return { id: docRef.id, ...docData };
    },

    async update(id, data) {
      await updateDoc(doc(firestore, colName, id), data);
      return { id, ...data };
    },

    async delete(id) {
      await deleteDoc(doc(firestore, colName, id));
    },
  };
}

// ── ファイルアップロード ──────────────────────────────────────
async function uploadFile({ file }) {
  const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return { file_url: url };
}

// ── AI（Cloudflare Worker プロキシ経由）────────────────────
async function invokeLLM({ prompt }) {
  const workerUrl = import.meta.env.VITE_WORKER_URL;
  if (!workerUrl) return 'AI機能を使用するには VITE_WORKER_URL を設定してください。';
  const res  = await fetch(`${workerUrl}/ai`, {
    method:  'POST',
    headers: {
      'Content-Type':    'application/json',
      'X-Worker-Secret': import.meta.env.VITE_WORKER_SECRET ?? '',
    },
    body: JSON.stringify({ prompt }),
  });
  const data = await res.json();
  return data.content || '';
}

// ── 公開 API ────────────────────────────────────────────────
export const base44 = {
  // 通常エンティティ（ユーザーフィルター付き）
  entities: Object.fromEntries(
    Object.keys(COLLECTION_MAP).map(name => [name, createEntityClient(name)])
  ),
  // 管理者用エンティティ（フィルターなし・全データ）
  adminEntities: Object.fromEntries(
    Object.keys(COLLECTION_MAP).map(name => [name, createEntityClient(name, { adminMode: true })])
  ),
  auth: {
    me:              async () => currentUser(),
    logout:          async () => { await getAuth(app).signOut(); },
    redirectToLogin: () => {},
  },
  integrations: {
    Core: {
      UploadFile: uploadFile,
      InvokeLLM:  invokeLLM,
    },
  },
};
