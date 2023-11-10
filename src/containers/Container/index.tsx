/*import {
    ReactElement,
    ReactNode,
    ReactPortal
} from 'react'*/
import React from 'react'
import './_container.scss'

export interface ContainerProps {
    children?: React.ReactNode
    //children?: ReactElement | Iterable<ReactNode> | ReactPortal | string | number | boolean | null | undefined
}

function Container(props: ContainerProps) {
    return <section className="app-container">{props.children}</section>
}

export default Container
