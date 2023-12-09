import {Form} from "react-bootstrap";
import {CreateType, FormikAware, MultipleOptions, RequiredOptions} from "../../../utils";
import {Price} from "./Price.tsx";
import {TotalArea} from "./TotalArea.tsx";
import {Required} from "./Required.tsx";

type Params = FormikAware<CreateType> & RequiredOptions & MultipleOptions

export function ParkingOptions({formik, required, multiple}: Params) {
    const isChecked = (value: string): boolean => {
        if (multiple && Array.isArray(formik.values.parking_type)) {
            return formik.values.parking_type.includes(value)
        } else {
            return formik.values.parking_type === value
        }
    }

    return (
        <div className="app-card">
            <Form.Group>
                <Form.Label>
                    Tip de parcare
                    {required && <Required dataName="parking_type"/>}
                </Form.Label>
                {Object.entries({
                    'UNDERGROUND': 'Subterană',
                    'ONSTREET': 'În curte',
                    'GARAGE': 'Garaj',
                }).map(([value, label], index) => (
                    <Form.Check
                        key={`parking-type-${index}`}
                        id={`parking-type-${index + 1}`}
                        type={multiple ? 'checkbox' : 'radio'}
                        label={label}
                        value={value}
                        name="parking_type"
                        className="form-cracker"
                        checked={isChecked(value)}
                        onChange={formik.handleChange}
                    />
                ))}
            </Form.Group>

            <Price formik={formik} required={required}/>
            <TotalArea formik={formik} label="Suprafață de parcare" required={required}/>
        </div>
    )
}
