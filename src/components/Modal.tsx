import {useState} from 'react'
import {Button, Modal as ModalBootstrap} from 'react-bootstrap'
import Children from '../utils/Children'

function Modal(props: Children) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <ModalBootstrap data-theme="dark" show={show} onHide={handleClose} fullscreen centered animation>
                <ModalBootstrap.Header closeButton/>
                <ModalBootstrap.Body>
                    {props.children}
                </ModalBootstrap.Body>
            </ModalBootstrap>
        </>
    )
}

export default Modal
