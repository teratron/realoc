import {CSSProperties} from 'react'

export interface AttrClass {
    className?: string
}

export interface AttrStyle {
    style?: CSSProperties
}

export default interface Attribute extends AttrClass, AttrStyle {
    title?: string
}
