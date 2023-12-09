import {Form} from "react-bootstrap";
import {CreateType, FormikAware} from "../../../utils";

export function Lift({formik}: FormikAware<CreateType>) {
    return (
        <Form.Group>
            <Form.Label>Ascensor</Form.Label>
            {Object.entries({
                1: 'Este',
                0: 'Absent'
            }).map(([value, label], index) => (
                <Form.Check
                    key={`elevator-${index}`}
                    id={`elevator-${index + 1}`}
                    type="radio"
                    label={label}
                    value={value}
                    name="elevator"
                    className="form-cracker"
                    checked={formik.values.elevator === value}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}