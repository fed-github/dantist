import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dantist/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Уберите '@stripe/react-stripe-js' отсюда
    }
  },
  optimizeDeps: {
    include: ['@stripe/react-stripe-js'], // Добавьте эту строку
  }
});