import {Container} from 'react-bootstrap'
import Children from '../../utils/Children'
import './_main.scss'

function Main(props: Children) {
    return (
        <main className="app-main">
            <Container>
                {props.children}
            </Container>
        </main>
    )
}

export default Main
