import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import logo from '../../assets/media/logo_realoc.png'
import './_header.scss'

interface HeaderProps {
    title?: string
}

function Header(props: HeaderProps) {
    return (
        <header className="app-header">
            <Container>
                <div className="head">head</div>
                <div className="body">
                    <Link to="/">
                        <img src={logo} className="logo" alt={props.title}/>
                    </Link>
                </div>
                <div className="foot">foot</div>
            </Container>
        </header>
    )
}

export default Header
