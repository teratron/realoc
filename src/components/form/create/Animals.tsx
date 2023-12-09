import {Form} from "react-bootstrap";
import {CreateType, FormikAware} from "../../../utils";

export function Animals({formik}: FormikAware<CreateType>) {
    return (
        <Form.Group>
            <Form.Label>Animale</Form.Label>
            {Object.entries({
                1: 'Se acceptă animale',
                0: 'Fără animale'
            }).map(([value, label], index) => (
                <Form.Check
                    key={`apt_animals_allowed-${index}`}
                    id={`apt_animals_allowed-${index + 1}`}
                    type="radio"
                    label={label}
                    value={value}
                    name="apt_animals_allowed"
                    className="form-cracker"
                    checked={formik.values.apt_animals_allowed === value}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}