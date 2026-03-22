/**
 * AuthContext.jsx - Firebase Google 認証
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getApps, getApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

export const ADMIN_EMAIL = 'kakureandmix@gmail.com';

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

const getFirebaseApp = () =>
  getApps().length ? getApp() : initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser]               = useState(null);
  const [isLoadingAuth, setLoading]   = useState(true);

  useEffect(() => {
    const auth        = getAuth(getFirebaseApp());
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    const auth     = getAuth(getFirebaseApp());
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    const auth = getAuth(getFirebaseApp());
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated:  !!user,
      isLoadingAuth,
      isAdmin:          user?.email === ADMIN_EMAIL,
      signInWithGoogle,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
