import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
//import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    //base: pkg.homepage,
    base: './',
    publicDir: '../public',
    appType: 'spa',
    plugins: [
        react()
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer()
            ]
        }
    },
    server: {
        open: 'realoc',
        warmup: {
            clientFiles: [
                'src/**/*.tsx'
            ]
        }
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        manifest: 'resource.json',
        rollupOptions: {
            input: {
                main: 'src/index.html',
            },
            output: {
                entryFileNames: 'assets/js/[name].[hash].js',
                chunkFileNames: 'assets/js/[name].[hash].js',
                assetFileNames: assetInfo => {
                    // @ts-ignore
                    const info = assetInfo.name?.split('.')
                    let ext: string = info[info.length - 1]
                    // @ts-ignore
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|webm|mp3|wav/i.test(ext)) {
                        ext = 'media'
                    // @ts-ignore
                    } else if (/(sa|sc|c)ss/i.test(ext)) {
                        ext = 'css'
                    // @ts-ignore
                    } else if (/woff(2)?|eot|ttf|otf/i.test(ext)) {
                        ext = 'fonts'
                    } else ext = ''
                    return `assets/${ext}/[name].[hash][extname]`
                }
            }
        }
    }
})
