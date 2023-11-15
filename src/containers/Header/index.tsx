import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Button, Container, Offcanvas, Stack} from 'react-bootstrap'
import ListLink from '../../components/ListLink'
//import Drawer from '../../components/Drawer'
import logo from '../../assets/media/logo.svg' // 96x24
import iconChevronLeft from '../../assets/media/icon_chevron_left.svg'
import './_header.scss'

interface HeaderProps {
    title?: string
    isResetButton?: boolean
}

function Header({title, isResetButton = false}: HeaderProps) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const Drawer = () => (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{useLocation().pathname}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={2}>
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
                            <img src={iconChevronLeft} alt=""/>
                        </Button>
                    </div>
                    <div className="body">
                        <Link to="/">
                            <img src={logo} className="logo" alt={title}/>
                        </Link>
                    </div>
                    <div className="foot">
                        {isResetButton ? <Button variant="light">Resetare</Button> : null}
                    </div>
                </Container>
            </header>
            <Drawer/>
        </>
    )
}

export default Header
