import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '../AuthContext.jsx';
import App from './App.jsx';
import './index.css';

const queryClient = window.__queryClient ?? new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      gcTime: 1000 * 60 * 5,
    },
  },
});
window.__queryClient = queryClient;

const root = window.__reactRoot ?? ReactDOM.createRoot(document.getElementById('root'));
window.__reactRoot = root;

root.render(
  <BrowserRouter basename="/coral-reef-keeper">
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
