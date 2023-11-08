import { defineConfig } from 'vite'
// @ts-ignore
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  //root: 'src',
  base: pkg.homepage,
  build: {
    rollupOptions: {
      input: {
        main: 'src/index.html'
      }
    },
    assetsDir: 'static/css',
    outDir: 'dist',
    sourcemap: true,
    minify: true,
    cssMinify: true,
    cssCodeSplit: false,
  },
  plugins: [],
})
