import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {CreateType, FormikAware, MultipleOptions} from "../../../utils";
import {SelectLocation} from "./SelectLocation.tsx";

export function Location({formik, multiple}: FormikAware<CreateType> & MultipleOptions) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const valueFields = () => {
        if (multiple && Array.isArray(formik.values.location)) {
            return (
                <>
                    {formik.values.location.map(v => (
                        <input type="hidden" name="location" value={v} key={v}/>
                    ))}
                </>
            )
        }

        return (
            // @ts-ignore value is string in this case
            <input type="hidden" name="location" value={formik.values.location}/>
        )
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Raion/oraș</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Selectați o locație"
                    value={formik.values.location_preview}
                    readOnly={true}
                    onClick={event => {
                        event.preventDefault()
                        setShow(true)
                    }}/>
                {valueFields()}
            </Form.Group>

            <Modal className="modal-form" show={show} onHide={handleClose} fullscreen={true} contentClassName="fs-modal">
                <Modal.Header closeButton>
                    <div className="app-container">
                        <Modal.Title>Selectați o locație</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <SelectLocation formik={formik} multiple={multiple}/>
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