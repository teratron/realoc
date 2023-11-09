import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    /*root: 'src', //path.resolve(__dirname, 'src'),
    base: pkg.homepage,
    appType: 'mpa',
    css: {
        postcss: {
            plugins: [
                autoprefixer({}),
            ]
        }
    },
    publicDir: '../public',*/
    plugins: [react()],
    /*resolve: {
        alias: {
            '@': './src',
        }
    },
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
    },*/
})
