import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {SelectDeveloper} from "../SelectDeveloper.tsx";
import {DeveloperList} from "../../../api";

export function ApartmentDeveloper() {
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState<DeveloperList>([])
    const [selectedItemsPreview, setSelectedItemsPreview] = useState('')

    const handleClose = () => setShow(false)

    const handleSelected = (data: DeveloperList) => {
        setSelected(data)

        let preview = data.slice(0, 3).map(v => v.name).join(', ')
        if (data.length > 3) {
            preview += `, +${data.length-3}`
        }
        setSelectedItemsPreview(preview)
    }

    return (
        <>
            <Form.Group controlId="developer-link">
                <Form.Label>Dezvoltator</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Selectați dezvoltator"
                    value={selectedItemsPreview}
                    readOnly={true}
                    onClick={event => {
                        event.preventDefault();
                        setShow(true)
                    }}/>
                {selected.map(v => (
                    <input type="hidden" name="developer" value={v.id} key={v.id} />
                ))}
            </Form.Group>

            <Modal show={show} onHide={handleClose} fullscreen={true} contentClassName="fs-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Selectați dezvoltator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SelectDeveloper onSelected={handleSelected}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>OK</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}