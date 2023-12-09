import {Form} from "react-bootstrap";
import {FormikProps} from "formik";
import {CreateType} from "../../../utils/CreateType.ts";

type Params = {
    formik: FormikProps<CreateType>
    label?: string
}
export function TotalArea({formik, label}: Params) {
    const title = label ? label : 'Suprafață totală'
    return (
        <Form.Group>
            <Form.Label htmlFor="area">{title}</Form.Label>
            <Form.Control
                id="area"
                name="area"
                type="text"
                placeholder="Indicați suprafața"
                value={formik.values.area}
                onChange={formik.handleChange}
            />
        </Form.Group>
    )
}
