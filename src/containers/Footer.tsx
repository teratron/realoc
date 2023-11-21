import Container from '../containers/Container'
import {Children} from '../utils/Attributes'

interface FooterProps extends Children {
    title?: string
}

function Footer(props: FooterProps) {
    return (
        <footer id="app-footer">
            <Container>
                {props.children}
            </Container>
        </footer>
    )
}

export default Footer
