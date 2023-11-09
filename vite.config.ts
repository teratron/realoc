import {defineConfig} from 'vite'
import path from 'path'
import autoprefixer from 'autoprefixer'
import pkg from './package.json'

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    base: pkg.homepage,
    appType: 'mpa',
    css: {
        postcss: {
            plugins: [
                autoprefixer({}),
            ]
        }
    },
    publicDir: '../public',
    build: {
        rollupOptions: {
            input: {
                index: 'src/index.html',
            },
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash][extname]',
            }
        },
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: false,
        minify: true,
        cssMinify: true,
        cssCodeSplit: false,
    },
    plugins: [],
    resolve: {
        alias: {
            '@': './src',
        }
    },
})
