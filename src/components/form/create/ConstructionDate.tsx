import {CreateType, FormikAware, MultipleOptions} from "../../../utils";
import {Form} from "react-bootstrap";

export function ConstructionDate({formik, multiple}: FormikAware<CreateType> & MultipleOptions) {
    const isChecked = (value: string): boolean => {
        if (multiple && Array.isArray(formik.values.construction_date)) {
            return formik.values.construction_date.includes(value)
        } else {
            return formik.values.construction_date === value
        }
    }

    return (
        <Form.Group>
            <Form.Label>Predare în exploatare</Form.Label>
            {[
                'Dat în exploatare', '2023', '2024', '2025', '2026', '2027+'
            ].map((value, index) => (
                <Form.Check
                    key={`construction-date-${index}`}
                    id={`construction-date-${index + 1}`}
                    type={multiple ? 'checkbox' : 'radio'}
                    label={value}
                    value={value}
                    name="construction_date"
                    className="form-cracker"
                    checked={isChecked(value)}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}