import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Button, Container, Offcanvas, Stack} from 'react-bootstrap'
import {ListLink} from '../../components/ListLink'
//import Drawer from '../../components/Drawer'
import logo from '../../assets/media/logo.svg' // 96x24
import './_header.scss'

interface HeaderProps {
    title?: string
}

function Header(props: HeaderProps) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const Drawer = () => (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{useLocation().pathname}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    <ListLink/>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )

    return (
        <>
            <header className="app-header">
                <Container>
                    <div className="head">
                        <Button variant="light" onClick={handleShow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </Button>
                    </div>
                    <div className="body">
                        <Link to="/">
                            <img src={logo} className="logo" alt={props.title}/>
                        </Link>
                    </div>
                    <div className="foot">Resetare</div>
                </Container>
            </header>
            <Drawer/>
        </>
    )
}

export default Header
