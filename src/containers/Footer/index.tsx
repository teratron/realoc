import {Container} from 'react-bootstrap'
import Children from '../../utils/Children'
import './_footer.scss'

interface FooterProps extends Children {
    title?: string
}

function Footer(props: FooterProps) {
    return (
        <footer className="app-footer">
            <Container>
                {props.children}
            </Container>
        </footer>
    )
}

export default Footer
