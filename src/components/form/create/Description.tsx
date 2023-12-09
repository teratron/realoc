import {Form} from "react-bootstrap";
import {CreateType, FormikAware} from "../../../utils";

export function Description({formik}: FormikAware<CreateType>) {
    return (
        <Form.Group>
            <Form.Label>
                <div className="row">
                    <div className="col">Descriere</div>
                    <div className="col text-end">{formik.values.description.length}/2000</div>
                </div>
            </Form.Label>
            <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                maxLength={2000}
                placeholder="Adaugă o descriere a proprietății. O descriere bine completată ajută la vănzarea mai rapidă a proprietății."
            />
        </Form.Group>
    )
}