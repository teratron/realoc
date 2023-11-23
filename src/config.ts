// Configuration
import app from '../package.json'

// import.meta.env.BASE_URL: string
// import.meta.env.MODE: string
// import.meta.env.DEV: boolean
// import.meta.env.PROD: boolean
// import.meta.env.SSR: boolean

// Paths
export const BASE_URL: string = import.meta.env.BASE_URL + app.name
export const JS_URL: string = import.meta.env.BASE_URL + 'assets/js'
export const CSS_URL: string = import.meta.env.BASE_URL + 'assets/css'
export const FONT_URL: string = import.meta.env.BASE_URL + 'assets/fonts'
export const MEDIA_URL: string = import.meta.env.BASE_URL + 'assets/media'

// Variables
export const MAX_PHOTOS: number = 10
export const MAX_LETTER_DESCRIPTION: number = 2000
