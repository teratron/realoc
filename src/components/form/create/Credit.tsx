import {Form} from "react-bootstrap";
import {CreateType, FormikAware} from "../../../utils";

export function Credit({formik}: FormikAware<CreateType>) {
    return (
        <Form.Group>
            <Form.Label>Credit ipotecar</Form.Label>
            {Object.entries({
                1: 'Disponibil',
                0: 'Indisponibil'
            }).map(([value, label], index) => (
                <Form.Check
                    key={`mortgage-${index}`}
                    id={`mortgage-${index + 1}`}
                    type="radio"
                    label={label}
                    value={value}
                    name="mortgage"
                    className="form-cracker"
                    checked={formik.values.mortgage === value}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}