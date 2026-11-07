import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // Relative assets work on GitHub Pages and in the browser preview.
  base: command === 'build' ? './' : '/',
  plugins: [react()],
}));
