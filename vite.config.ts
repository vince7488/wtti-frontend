import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3333,
    // open: true,
  },
  preview: {
    port: 7488,
  },
  build: {
    outDir: 'dist',
  },
});
