import './_button.scss'
import Children from '../../utils/Children'
import {AttrClass} from '../../utils/Attribute.tsx'

interface ButtonProps extends Children, AttrClass {
}

function Button(props: ButtonProps) {
    return (
        <button>
            <span className="mdc-button__ripple"></span>
            {/*<i className="material-icons mdc-button__icon" aria-hidden="true">bookmark</i>*/}
            <span className="mdc-button__label">{props.children}</span>
        </button>
    )
}

export default Button
