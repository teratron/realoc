import Container, {ContainerProps} from '../Container'
import './_main.scss'

function Main(props: ContainerProps) {
    return (
        <main className="app-main">
            <Container>
                {props.children}
            </Container>
        </main>
    )
}

export default Main
