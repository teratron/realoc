import {Link} from 'react-router-dom'
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
                <Link to="/">
                    <img src={logo} className="logo" alt={props.title}/>
                </Link>
            </Container>
        </header>
    )
}

export default Header
