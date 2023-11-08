import {defineConfig} from 'vite'
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    root: 'src',
    base: pkg.homepage,
    appType: 'mpa',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$injectedColor: orange;`,
            },
        },
    },
    build: {
        rollupOptions: {
            //input: 'src/index.ts',
            output: {
                entryFileNames: 'js/[name].[hash].js',
                assetFileNames: '[ext]/[name].[hash][extname]',
                chunkFileNames: '[name]--[hash].js',
            }
        },
        //assetsDir: 'static',
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: false,
        minify: true,
        cssMinify: true,
        cssCodeSplit: false,
    },
    publicDir: '../public',
    plugins: [],
})
