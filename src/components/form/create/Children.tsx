import {Form} from "react-bootstrap";
import {CreateType, FormikAware} from "../../../utils";

export function Children({formik}: FormikAware<CreateType>) {
    return (
        <Form.Group>
            <Form.Label>Copii</Form.Label>
            {Object.entries({
                1: 'Se acceptă copii',
                0: 'Fără copii'
            }).map(([value, label], index) => (
                <Form.Check
                    key={`apt_kids_allowed-${index}`}
                    id={`apt_kids_allowed-${index + 1}`}
                    type="radio"
                    label={label}
                    value={value}
                    name="apt_kids_allowed"
                    className="form-cracker"
                    checked={formik.values.apt_kids_allowed === value}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}