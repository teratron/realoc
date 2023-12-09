import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {CreateType, FormikAware, MultipleOptions} from "../../../utils";
import {SelectDeveloper} from "./SelectDeveloper.tsx";

type Params = FormikAware<CreateType> & MultipleOptions

export function ApartmentDeveloper({formik, multiple}: Params) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    const valueFields = () => {
        if (multiple && Array.isArray(formik.values.developer)) {
            return (
                <>
                    {formik.values.developer.map(v => (
                        <input type="hidden" name="developer" value={v} key={v}/>
                    ))}
                </>
            )
        }

        return (
            // @ts-ignore value is string in this case
            <input type="hidden" name="developer" value={formik.values.developer}/>
        )
    }

    return (
        <>
            <Form.Group>
                <Form.Label>Dezvoltator</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Selectați dezvoltator"
                    value={formik.values.developer_preview}
                    readOnly={true}
                    onClick={event => {
                        event.preventDefault();
                        setShow(true)
                    }}/>
                {valueFields()}
            </Form.Group>

            <Modal className="modal-form" show={show} onHide={handleClose} fullscreen={true}
                   contentClassName="fs-modal">
                <Modal.Header closeButton>
                    <div className="app-container">
                        <Modal.Title>Selectați dezvoltator</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <SelectDeveloper formik={formik} multiple={multiple}/>
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