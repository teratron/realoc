import {CSSProperties} from 'react'
import Children from '../../utils/Children'
import './_pad.scss'

interface CardProps extends Children {
    className?: string
    style?: CSSProperties
}

function Pad(props: CardProps) {
    let className = props.className ? 'app-pad ' + props.className : 'app-pad'
    let style = props.style ? props.style : undefined

    return (
        <div className={className} style={style}>
            {props.children}
        </div>
    )
}

export default Pad
