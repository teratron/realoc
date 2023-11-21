import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Image, Offcanvas, Stack} from 'react-bootstrap'
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
                <Stack gap={2}>
                    <Navigation/>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )

    return (
        <>
            <header id="app-header">
                <Container>
                    <div className="head">
                        <Button variant="light" onClick={handleShow}>
                            <Image src={iconChevronLeft}/>
                        </Button>
                    </div>
                    <div className="body">
                        <Link to="/">
                            <Image src={logo} className="logo" alt={title}/>
                        </Link>
                    </div>
                    <div className="foot">
                        {idResetButton !== ''
                            ? <Button
                                form={idResetButton}
                                type="reset"
                                variant="light">
                                Resetare
                                <span
                                    className="badge">
                                    9
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Button>
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
