import {CreateType, FormikAware, MultipleOptions, RequiredOptions} from "../../../utils";
import {Form} from "react-bootstrap";
import {Required} from "./Required.tsx";

export function HouseType({formik, multiple, required}: FormikAware<CreateType> & MultipleOptions & RequiredOptions) {
    const isChecked = (value: string): boolean => {
        if (multiple && Array.isArray(formik.values.house_type)) {
            return formik.values.house_type.includes(value)
        } else {
            return formik.values.house_type === value
        }
    }

    return (
        <Form.Group>
            <Form.Label>
                Tip casă
                {required && <Required dataName="house_type"/>}
            </Form.Label>
            {Object.entries({
                'HOUSE': 'Casa',
                'TOWNHOUSE': 'Townhouse',
                'DUPLEX': 'Duplex',
            }).map(([value, label], index) => (
                <Form.Check
                    key={`house-type-${index}`}
                    id={`house-type-${index + 1}`}
                    type={multiple ? 'checkbox' : 'radio'}
                    label={label}
                    value={value}
                    name="house_type"
                    className="form-cracker"
                    checked={isChecked(value)}
                    onChange={formik.handleChange}
                />
            ))}
        </Form.Group>
    )
}
