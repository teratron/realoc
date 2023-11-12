import Children from '../../utils/Children.tsx'
import AttrCommon from '../../utils/Attribute.tsx'
import './_pad.scss'

interface PadProps extends Children, AttrCommon {
}

function Pad(props: PadProps) {
    const className = props.className ? 'app-pad ' + props.className : 'app-pad'
    const style = props.style ? props.style : undefined

    return (
        <div className={className} style={style}>
            {props.children}
        </div>
    )
}

export default Pad
