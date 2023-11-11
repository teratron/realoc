import {CSSProperties} from 'react'
import Children from '../../utils/Children'
import './_card.scss'

interface CardProps extends Children {
    className?: string
    style?: CSSProperties
}

function Card(props: CardProps) {
    const className = props.className ? 'app-card ' + props.className : 'app-card'
    const style = props.style ? props.style : undefined

    return (
        <div className={className} style={style}>
            {props.children}
        </div>
    )
}

export default Card
