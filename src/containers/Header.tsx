import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Offcanvas} from 'react-bootstrap'
import Container from '../containers/Container'
import Navigation from '../components/Navigation'

// Media
import logo from '../assets/media/logo.svg'
import iconChevronLeft from '../assets/media/icon_chevron_left.svg'

interface HeaderProps {
    title?: string
    resetButton?: { id: string, badge: number }
}

function Header({title = '', resetButton = {id: '', badge: 0}}: HeaderProps) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const Drawer = () => (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton/>
            <Offcanvas.Body>
                <Navigation/>
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
                        {resetButton.id !== ''
                            ? <button
                                form={resetButton.id}
                                type="reset"
                                className="btn btn-light"
                                disabled={resetButton.badge === 0}>Resetare
                                {resetButton?.badge > 0 ? <span className="badge">{resetButton.badge}</span> : null}
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
