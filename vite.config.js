import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/coral-reef-keeper/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':    ['react', 'react-dom', 'react-router-dom'],
          'firebase':        ['firebase/app', 'firebase/firestore', 'firebase/storage', 'firebase/auth'],
          'query':           ['@tanstack/react-query'],
          'charts':          ['recharts'],
          'ui':              ['@radix-ui/react-tabs', '@radix-ui/react-dialog', '@radix-ui/react-slot', 'lucide-react'],
        },
      },
    },
  },
});
