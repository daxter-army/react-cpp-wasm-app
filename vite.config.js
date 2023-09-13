import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@hoc': path.resolve(__dirname, './src/hoc'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@context': path.resolve(__dirname, './src/context'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'wasm/wasm.js',
          dest: 'assets/wasm'
        },
        {
          src: 'wasm/wasm.wasm',
          dest: 'assets/wasm'
        }
      ]
    })
  ],
  // Comment base, when developing
  base: "/react-cpp-wasm-app",
  build: {
    outDir: 'dist',
  },
})
