import {Offcanvas} from 'react-bootstrap'
import {useState} from 'react'
import './_drawer.scss'

function Drawer() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    //const handleShow = () => setShow(true)

    /*<Navbar.Offcanvas
id="offcanvasNavbar"
aria-labelledby="offcanvasNavbarLabel"
placement="end">
    <Offcanvas.Header closeButton>
<Offcanvas.Title id="offcanvasNavbarLabel">
    Offcanvas
    </Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
    <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
    </Nav>
</Offcanvas.Body>
</Navbar.Offcanvas>*/


    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Drawer
