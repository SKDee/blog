import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@": path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(),Pages()],
  server:{
    host: '0.0.0.0',
    cors: true,
    open: true,
    hmr: true
  }
})