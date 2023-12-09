import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {Location as LocationDto} from "../../../api";
import {SelectLocation} from "../SelectLocation";

export function Location() {
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState<LocationDto[]>([])
    const [selectedItemsPreview, setSelectedItemsPreview] = useState('')

    const handleClose = () => setShow(false)

    const handleSelected = (data: LocationDto[]) => {
        setSelected(data)

        let preview = data.slice(0, 3).map(v => v.name).join(', ')
        if (data.length > 3) {
            preview += `, +${data.length-3}`
        }
        setSelectedItemsPreview(preview)
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Raion/oraș</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Selectați o locație"
                    value={selectedItemsPreview}
                    readOnly={true}
                    onClick={event => {
                        event.preventDefault()
                        setShow(true)
                    }}/>
                {selected.map(v => (
                    <input type="hidden" name="location" value={v.id} key={v.id} />
                ))}
            </Form.Group>

            <Modal className="modal-form" show={show} onHide={handleClose} fullscreen={true} contentClassName="fs-modal">
                <Modal.Header closeButton>
                    <div className="app-container">
                        <Modal.Title>Selectați o locație</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <SelectLocation onSelected={handleSelected}/>
                </Modal.Body>
                <Modal.Footer className="navbar">
                    <div className="app-container">
                        <Button type="button" variant="secondary" onClick={handleClose}>OK</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}