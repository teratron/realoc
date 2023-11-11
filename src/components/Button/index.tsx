import './_button.scss'
import Children from '../../utils/Children'

interface ButtonProps extends Children {
    title: string
}

function Button(props: ButtonProps) {
    return (
        <button className="mdc-button mdc-button--raised">
            <span className="mdc-button__label">Contained Button</span>
            {props.children}
        </button>
    )
}

//export default React.memo(Button)
export default Button
