import './_button.scss'
import Children from '../../utils/Children'
import {AttrClass} from '../../utils/Attribute.tsx'

interface ButtonProps extends Children, AttrClass {
}

function Button(props: ButtonProps) {
    let arrayClass = props.className?.split(' ')
    let attrClass: string = 'mdc-button'

    let isRaised: boolean = false
    let isOutlined: boolean = false

    for (let item of arrayClass!) {
        switch (item) {
            case 'raised':
                if (!isOutlined) {
                    isRaised = !isRaised
                    attrClass += ' mdc-button--raised'
                }
                break
            case 'outlined':
                if (!isRaised) {
                    isOutlined = !isOutlined
                    attrClass += ' mdc-button--outlined'
                }
                break
            case 'icon':
                attrClass += ' mdc-button--icon-leading'
                break
            default:
                break
        }
    }

    return (
        <button className={attrClass}>
            <span className="mdc-button__ripple"></span>
            {/*<i className="material-icons mdc-button__icon" aria-hidden="true">bookmark</i>*/}
            <span className="mdc-button__label">{props.children}</span>
        </button>
    )
}

export default Button
