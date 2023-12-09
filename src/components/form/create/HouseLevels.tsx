import {CreateType, FormikAware, MultipleOptions} from "../../../utils";
import {Form} from "react-bootstrap";

export function HouseLevels({formik, multiple}: FormikAware<CreateType> & MultipleOptions) {
    return (
        <Form.Group>
            <Form.Label>Niveluri</Form.Label>
            {[
                '1', '2', '3', '4+'
            ].map((value, index) => (
                <Form.Check
                    key={`floors-${index}`}
                    id={`floors-${index + 1}`}
                    type={multiple ? 'checkbox' : 'radio'}
                    label={value}
                    value={value}
                    name="levels_total"
                    className="form-cracker"
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}