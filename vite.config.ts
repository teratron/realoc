import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
//import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    base: './', // pkg.homepage,
    publicDir: '../public',
    appType: 'mpa',
    plugins: [
        react()
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ]
        }
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        manifest: 'resource.json',
        sourcemap: true,
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash][extname]',
                chunkFileNames: 'assets/[name]-[hash][extname]',
            }
        }
    }
})

/*
export default defineConfig(({ command, mode, ssrBuild }) => {
    if (command === 'serve') {
        return {
            // dev specific config
        }
    } else {
        // command === 'build'
        return {
            // build specific config
        }
    }
})*/
