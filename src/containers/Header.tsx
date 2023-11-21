import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Offcanvas} from 'react-bootstrap'
import Container from '../containers/Container'
import Navigation from '../components/Navigation'

// Media
import logo from '../assets/media/logo.svg' // 96x24
import iconChevronLeft from '../assets/media/icon_chevron_left.svg'


interface HeaderProps {
    title?: string
    idResetButton?: string
}

function Header({title = '', idResetButton = ''}: HeaderProps) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const Drawer = () => (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton/>
            <Offcanvas.Body>
                <div className="vstack gap-2 mx-2">
                    <Navigation/>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )

    return (
        <>
            <header id="app-header">
                <Container>
                    <div className="head">
                        <button type="button" className="btn btn-light" onClick={handleShow}>
                            <img src={iconChevronLeft} alt=""/>
                        </button>
                    </div>
                    <div className="body">
                        <Link to="/">
                            <img src={logo} className="logo" alt={title}/>
                        </Link>
                    </div>
                    <div className="foot">
                        {idResetButton !== ''
                            ? <button
                                form={idResetButton}
                                type="reset"
                                className="btn btn-light">Resetare
                                <span
                                    className="badge">9
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            : null
                        }
                    </div>
                </Container>
            </header>
            <Drawer/>
        </>
    )
}

export default Header
