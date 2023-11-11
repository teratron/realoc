import Children from '../../utils/Children'
import './_container.scss'

function Container(props: Children) {
    return <section className="app-container">{props.children}</section>
}

export default Container
