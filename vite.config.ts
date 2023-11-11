import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    base: './',
    //base: 'https://teratron.github.io/realoc',
    publicDir: '../public',
    appType: 'mpa',
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
                chunkFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: assetInfo => {
                    let info: string[]
                    if (typeof assetInfo.name === 'string') {
                        // @ts-ignore // TODO:
                        info = assetInfo.name.split('.')
                    }
                    // @ts-ignore // TODO:
                    let extType: string = info[info.length - 1]
                    // @ts-ignore // TODO:
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|webm|mp3|wav/i.test(extType)) {
                        extType = 'media/'
                        // @ts-ignore // TODO:
                    } else if (/(sa|sc|c)ss/i.test(extType)) {
                        extType = 'css/'
                        // @ts-ignore // TODO:
                    } else if (/woff(2)?|eot|ttf|otf/i.test(extType)) {
                        extType = 'fonts/'
                    } else extType = ''

                    return `assets/${extType}[name].[hash][extname]`
                }
            }
        }
    }
    /*resolve: {
        alias: {
            '@': './src',
        }
    },*/
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
