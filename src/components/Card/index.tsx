import {CSSProperties} from 'react'
import {ContainerProps} from '../Container'
import './_card.scss'

interface CardProps extends ContainerProps {
    className?: string
    style?: CSSProperties
}

function Card(props: CardProps) {
    let className = props.className ? 'app-card ' + props.className : 'app-card'
    let style = props.style ? props.style : undefined

    return (
        <div className={className} style={style}>
            {props.children}
        </div>
    )
}

export default Card
