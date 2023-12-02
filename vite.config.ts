/** @type {import('vite').UserConfig} */
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'
import * as paths from 'path'
import app from './package.json'

const root = paths.resolve(__dirname, './')
export const path = {
    root: root,
    src: paths.resolve(root, 'src'),
    build: paths.resolve(root, 'dist'),
    public: paths.resolve(root, 'public')
}

// https://vitejs.dev/config/
export default defineConfig(({command, mode, isSsrBuild, isPreview}) => {
    console.log('Config arguments:', command, mode, isSsrBuild, isPreview)

    // build      command='build', mode='production'
    // build:dev  command='build', mode='development'
    // dev        command='serve', mode='development'
    // preview    command='serve', mode='production'

    return {
        base: command === 'serve' ? '/' : './',
        root: path.src,
        publicDir: path.public,
        plugins: [
            react()
        ],
        server: {
            open: app.name,
            warmup: {
                clientFiles: [
                    'src/**/*.tsx'
                ]
            }
        },
        preview: {
            open: app.name,
        },
        test: {
        },
        css: {
            devSourcemap: true,
            postcss: {
                plugins: [
                    autoprefixer({})
                ]
            }
        },
        minify: mode === 'development' ? false : 'terser',
        sourcemap: command === 'serve' ? 'inline' : false,
        build: {
            outDir: path.build,
            emptyOutDir: true,
            manifest: command === 'build' ? 'manifest.json' : false,
            rollupOptions: {
                input: {
                    main: path.src + '/index.html'
                },
                output: {
                    entryFileNames: 'js/[name].[hash].js',
                    chunkFileNames: 'js/[name].[hash].js',
                    assetFileNames: (assetInfo => {
                        const info = assetInfo.name?.split('.')
                        let ext: string = info![info!.length - 1]
                        if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|webm|mp3|wav/i.test(ext)) {
                            ext = 'media'
                        } else if (/(sa|sc|c)ss/i.test(ext)) {
                            ext = 'css'
                        } else if (/woff(2)?|eot|ttf|otf/i.test(ext)) {
                            ext = 'fonts'
                        } else ext = ''
                        return `${ext}/[name].[hash][extname]`
                    })
                }
            }
        },
        resolve: {
            alias: {
                '@': path.src,
            }
        }
    }
})
