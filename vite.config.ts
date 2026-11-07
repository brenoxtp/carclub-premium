import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // GitHub Pages publishes project websites under /<repository-name>/.
  base: command === 'build' ? '/carclub-premium/' : '/',
  plugins: [react()],
}));
