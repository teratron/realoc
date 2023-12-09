import {Form, InputGroup} from "react-bootstrap";
import {CreateType, CustomLabel, FormikAware, RequiredOptions} from "../../../utils";
import {Required} from "./Required.tsx";

type Params = FormikAware<CreateType> & CustomLabel & RequiredOptions

export function TotalArea({formik, label, required}: Params) {
    const title = label ? label : 'Suprafață totală'
    return (
        <Form.Group>
            <Form.Label htmlFor="area">
                {title}
                {required && <Required dataName="area"/>}
            </Form.Label>
            <InputGroup>
                <Form.Control
                    id="area"
                    name="area"
                    type="text"
                    placeholder="Indicați suprafața"
                    value={formik.values.area}
                    onChange={formik.handleChange}
                />
                <InputGroup.Text>m²</InputGroup.Text>
            </InputGroup>
        </Form.Group>
    )
}
