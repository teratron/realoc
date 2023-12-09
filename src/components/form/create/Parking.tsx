import {Form} from "react-bootstrap";
import {CreateType, FormikAware} from "../../../utils";

export function Parking({formik}: FormikAware<CreateType>){
    return (
        <Form.Group>
            <Form.Label>Parcare</Form.Label>
            {Object.entries({
                'UNDERGROUND': 'Subterană',
                'ONSTREET': 'În curte',
                'GARAGE': 'Garaj',
            }).map(([value, label], index) => (
                <Form.Check
                    key={`parking-${index}`}
                    id={`parking-${index + 1}`}
                    type="radio"
                    label={label}
                    value={value}
                    name="apt_parking"
                    className="form-cracker"
                    checked={formik.values.apt_parking === value}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}