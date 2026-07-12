import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Esto le dice explícitamente al plugin de React que procese archivos .js comunes
      include: /\.(mdx|js|jsx|ts|tsx)$/,
    }),
  ],
});