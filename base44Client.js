/**
 * base44Client.js - Firebase drop-in replacement
 * base44 SDK を Firebase Firestore に完全置き換え
 * 他のファイルは一切変更不要
 */

import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, doc,
  addDoc, updateDoc, deleteDoc,
  getDocs, getDoc, query, where,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// ── Firebase 初期化 ──────────────────────────────────────────
const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

const app       = initializeApp(firebaseConfig);
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

// ── ソートユーティリティ（クライアントサイド）───────────────
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
function createEntityClient(entityName) {
  const colName = COLLECTION_MAP[entityName];

  return {
    /** 全件取得 */
    async list(sortField) {
      const snap = await getDocs(collection(firestore, colName));
      const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      return sortDocs(docs, sortField);
    },

    /** 条件絞り込み取得 */
    async filter(conditions, sortField) {
      // { id: 'xxx' } の場合はドキュメント直接取得
      if (conditions.id && Object.keys(conditions).length === 1) {
        const docSnap = await getDoc(doc(firestore, colName, conditions.id));
        if (!docSnap.exists()) return [];
        return [{ id: docSnap.id, ...docSnap.data() }];
      }

      // 通常の where クエリ
      const constraints = Object.entries(conditions)
        .filter(([key]) => key !== 'id')
        .map(([key, value]) => where(key, '==', value));

      const q    = constraints.length > 0
        ? query(collection(firestore, colName), ...constraints)
        : query(collection(firestore, colName));
      const snap = await getDocs(q);
      const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      return sortDocs(docs, sortField);
    },

    /** 新規作成 */
    async create(data) {
      const docData = { ...data, created_date: new Date().toISOString() };
      const docRef  = await addDoc(collection(firestore, colName), docData);
      return { id: docRef.id, ...docData };
    },

    /** 更新 */
    async update(id, data) {
      await updateDoc(doc(firestore, colName, id), data);
      return { id, ...data };
    },

    /** 削除 */
    async delete(id) {
      await deleteDoc(doc(firestore, colName, id));
    },
  };
}

// ── ファイルアップロード（Firebase Storage）────────────────
async function uploadFile({ file }) {
  const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return { file_url: url };
}

// ── AI（Cloudflare Worker プロキシ経由）────────────────────
async function invokeLLM({ prompt }) {
  const workerUrl = import.meta.env.VITE_WORKER_URL;
  if (!workerUrl) {
    console.warn('VITE_WORKER_URL が未設定です。WaterAdvisor は動作しません。');
    return 'AI機能を使用するには VITE_WORKER_URL を設定してください。';
  }
  const res = await fetch(`${workerUrl}/ai`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ prompt }),
  });
  const data = await res.json();
  return data.content || '';
}

// ── 公開 API（base44 と同一形状）────────────────────────────
export const base44 = {
  entities: Object.fromEntries(
    Object.keys(COLLECTION_MAP).map(name => [name, createEntityClient(name)])
  ),
  auth: {
    me:              async () => ({ email: 'local@user', role: 'admin' }),
    logout:          () => {},
    redirectToLogin: () => {},
  },
  integrations: {
    Core: {
      UploadFile: uploadFile,
      InvokeLLM:  invokeLLM,
    },
  },
};
