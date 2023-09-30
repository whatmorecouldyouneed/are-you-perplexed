import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  homepage: '/whatmorecouldyouneed.github.io/',
  build: {
    outDir: 'dist',
  },
});