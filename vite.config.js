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
});
