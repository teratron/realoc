import logo from '../../assets/media/logo_realoc.png'
import './_header.scss'

interface HeaderProps {
    title: string
}

function Header(props: HeaderProps) {
    return (
        <header className="app-header">
            <div>
                <img src={logo} className="logo" alt="logo"/>
                <h1 className="title">{props.title}</h1>
            </div>
        </header>
    )
}

export default Header
