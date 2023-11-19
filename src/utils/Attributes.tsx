import {CSSProperties, ReactNode} from 'react'

export interface Children {
    children?: ReactNode
}

export interface AttributeClass {
    className?: string
}

export interface AttributeStyle {
    style?: CSSProperties
}

export default interface Attributes extends AttributeClass, AttributeStyle {
    id?: number
    title?: string
}