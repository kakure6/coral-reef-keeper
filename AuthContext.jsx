/**
 * AuthContext.jsx - 認証不要版
 * base44 の requiresAuth: false に合わせてシンプル化
 */

import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={{
    user:                    { email: 'local@user', role: 'admin' },
    isAuthenticated:         true,
    isLoadingAuth:           false,
    isLoadingPublicSettings: false,
    authError:               null,
    appPublicSettings:       null,
    logout:                  () => {},
    navigateToLogin:         () => {},
    checkAppState:           async () => {},
  }}>
    {children}
  </AuthContext.Provider>
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
