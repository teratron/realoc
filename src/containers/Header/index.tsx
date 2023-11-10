import Container from '../Container'
import logo from '../../assets/media/logo_realoc.png'
import './_header.scss'

interface HeaderProps {
    title: string
}

function Header(props: HeaderProps) {
    return (
        <header className="app-header">
            <Container>
                <a href="/"><img src={logo} className="logo" alt={props.title}/></a>
            </Container>
        </header>
    )
}

export default Header
