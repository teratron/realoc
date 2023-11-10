import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
//import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    base: './', // pkg.homepage,
    appType: 'mpa',
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ]
        }
    },
    build: {
        manifest: 'resource.json',
        /*rollupOptions: {
            input: {
                index: 'src/main.tsx'
            }
        }*/
    }
})
