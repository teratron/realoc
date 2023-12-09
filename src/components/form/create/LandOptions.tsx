import {Form} from "react-bootstrap";
import {CreateType, FormikAware, MultipleOptions, RequiredOptions} from "../../../utils";
import {Price} from "./Price.tsx";
import {LandAreaWithUnit} from "./LandAreaWithUnit.tsx";
import {Credit} from "./Credit.tsx";

export function LandOptions({formik, multiple, required}: FormikAware<CreateType> & MultipleOptions & RequiredOptions) {

    const isChecked = (value: string): boolean => {
        if (multiple && Array.isArray(formik.values.land_type)) {
            return formik.values.land_type.includes(value)
        } else {
            return formik.values.land_type === value
        }
    }

    return (
        <div className="app-card">
            <Form.Group>
                <Form.Label>Tip de teren</Form.Label>
                <div className="form-tab">
                    {Object.entries({
                        'AGRO': 'Agricol',
                        'BUILDING': 'De construcții',
                        'LAKE': 'Cu lac'
                    }).map(([value, label], index) => (
                        <>
                            <input
                                key={`land-type-${index}`}
                                id={`land-type-${index + 1}`}
                                name="land_type"
                                value={value}
                                type="radio"
                                checked={isChecked(value)}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor={`land-type-${index + 1}`}>{label}</label>
                        </>
                    ))}
                </div>
            </Form.Group>

            <Price formik={formik} required={required}/>
            {formik.values.offert_type === 'SELL' && <Credit formik={formik}/>}
            <LandAreaWithUnit formik={formik} required={required}/>
        </div>
    )
}
