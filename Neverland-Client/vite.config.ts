import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import {fileURLToPath} from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.ttf'],
  resolve: {
    alias: {
      '/fonts': path.resolve(__dirname, './public/fonts'),
    },
  },
})
