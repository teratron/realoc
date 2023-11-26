import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Offcanvas} from 'react-bootstrap'
import Container from '../containers/Container'
import Navigation from '../components/Navigation'

// Media
import logo from '../assets/media/logo.svg'
import iconChevronLeft from '../assets/media/icon_chevron_left.svg'
import iconMenu from '../assets/media/icon_menu.svg'

interface HeaderProps {
    title?: string
    prevPath?: string
    resetButton?: { id: string, count: number }
}

function Header({
                    title = '',
                    prevPath = '',
                    resetButton = {
                        id: '',
                        count: 0
                    }
                }: HeaderProps) {
    const navigate = useNavigate();
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
                        {prevPath === ''
                            ? <button type="button" className="btn btn-light" onClick={handleShow}>
                                <img src={iconMenu} alt=""/>
                            </button>
                            : <button
                                type="button"
                                className="btn btn-light"
                                onClick={e => {
                                    e.preventDefault();
                                    navigate(`/${prevPath}`);
                                }}>
                                <img src={iconChevronLeft} alt=""/>
                            </button>
                        }
                    </div>
                    <div className="body">
                        {prevPath === ''
                            ? <Link to="/">
                                <img src={logo} className="logo" alt={title}/>
                            </Link>
                            : <div>{title}</div>
                        }
                    </div>
                    <div className="foot">
                        {resetButton.id !== ''
                            ? <button
                                form={resetButton.id}
                                type="reset"
                                className="btn btn-light"
                                disabled={resetButton.count === 0}>Resetare
                                {resetButton?.count > 0 ? <span className="badge">{resetButton.count}</span> : null}
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
