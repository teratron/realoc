import {CreateType, FormikAware} from "../../../utils";
import {Form} from "react-bootstrap";

export function ConstructionDate({formik}: FormikAware<CreateType>) {
    return (
        <Form.Group>
            <Form.Label>Predare în exploatare</Form.Label>
            {[
                'Dat în exploatare', '2023', '2024', '2025', '2026', '2027+'
            ].map((value, index) => (
                <Form.Check
                    key={`construction-date-${index}`}
                    id={`construction-date-${index + 1}`}
                    type="radio"
                    label={value}
                    value={value}
                    name="construction_date"
                    className="form-cracker"
                    checked={formik.values.construction_date === value}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}