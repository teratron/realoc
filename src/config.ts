// Configuration
import app from '../package.json'

// import.meta.env.BASE_URL: string
// import.meta.env.MODE: string
// import.meta.env.DEV: boolean
// import.meta.env.PROD: boolean
// import.meta.env.SSR: boolean

export const ASSETS_URL: string = import.meta.env.DEV
    ? import.meta.env.BASE_URL + 'assets/'
    : import.meta.env.BASE_URL

// Paths
export const BASE_URL: string = import.meta.env.BASE_URL + app.name
export const JS_URL: string = ASSETS_URL + 'js'
export const CSS_URL: string = ASSETS_URL + 'css'
export const FONT_URL: string = ASSETS_URL + 'fonts'
export const MEDIA_URL: string = ASSETS_URL + 'media'

// Variables
export const MAX_PHOTOS: number = 10
export const MAX_LETTER_DESCRIPTION: number = 2000
