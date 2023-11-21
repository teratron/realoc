import {Children} from '../utils/Attributes'

function Container(props: Children) {
    return (
        <section className="app-container">
            <Container>
                {props.children}
            </Container>
        </section>
    )
}

export default Container
