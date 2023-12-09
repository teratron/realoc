import {Form} from "react-bootstrap";
import {CreateType, FormikAware, MultipleOptions} from "../../../utils";

type Params = FormikAware<CreateType> & MultipleOptions
export function Furniture({multiple, formik}: Params) {
    const isChecked = (value: string): boolean => {
        if (multiple && Array.isArray(formik.values.reparation)) {
            return formik.values.reparation.includes(value)
        } else {
            return formik.values.reparation === value
        }
    }

    return (
        <Form.Group>
            <Form.Label>Mobilier</Form.Label>
            {Object.entries({
                'NO': 'Nemobilat',
                'PART': 'Parțial mobilat',
                'FULL': 'Mobilat',
            }).map(([value, label], index) => (
                <Form.Check
                    key={`furniture-${index}`}
                    id={`furniture-${index + 1}`}
                    type={multiple ? 'checkbox' : 'radio'}
                    label={label}
                    value={value}
                    name="furniture"
                    className="form-cracker"
                    checked={isChecked(value)}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}