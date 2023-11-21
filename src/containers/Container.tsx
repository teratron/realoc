import {Children} from '../utils/Attributes'

function Container(props: Children) {
    return (
        <section className="app-container">
            {props.children}
        </section>
    )
}

export default Container
