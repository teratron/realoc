import {Container} from 'react-bootstrap'
import {Children} from '../utils/Attributes'

function Main(props: Children) {
    return (
        <main id="app-main">
            <Container>
                {props.children}
            </Container>
        </main>
    )
}

export default Main
