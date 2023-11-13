import {CSSProperties} from 'react'

export interface AttrClass {
    className?: string
}

export interface AttrStyle {
    style?: CSSProperties
}

export default interface AttrCommon extends AttrClass, AttrStyle {
    id?: string
    title?: string
}
