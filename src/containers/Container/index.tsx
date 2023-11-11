import React from 'react'
import './_container.scss'

export interface ContainerProps {
    children?: React.ReactNode
}

function Container(props: ContainerProps) {
    return <section className="app-container">{props.children}</section>
}

export default Container
