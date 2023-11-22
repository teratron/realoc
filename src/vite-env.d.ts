/// <reference types="vite/client" />

//declare const __VITE_COMMAND__: string
//declare const __VITE_MODE__: string

interface ImportMetaEnv {
    readonly VITE_SOME_KEY: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
