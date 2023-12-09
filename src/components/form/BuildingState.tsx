import {Form} from "react-bootstrap";
import {CreateType, CustomLabel, FormikAware, MultipleOptions, RequiredOptions} from "../../utils";
import {Furniture, Required} from "./create";

type Params = FormikAware<CreateType> & CustomLabel & MultipleOptions & RequiredOptions & {
    reparationOptions: Record<string, string>
}

export function BuildingState({label, reparationOptions, multiple, formik, required}: Params) {

    const intersect = (options: string[], value: undefined|string|string[]): boolean => {
        if (!value) {
            return false
        }
        if (Array.isArray(value)) {
            return options.filter(value => value.includes(value)).length > 0
        }

        return options.includes(value)
    }

    const isChecked = (value: string): boolean => {
        if (multiple && Array.isArray(formik.values.reparation)) {
            return formik.values.reparation.includes(value)
        } else {
            return formik.values.reparation === value
        }
    }

    return(
        <div className="app-card pb-1">
            <Form.Group>
                <Form.Label>
                    {label}
                    {required && <Required dataName="reparation"/>}
                </Form.Label>
                {Object.entries(reparationOptions).map(([value, label], index) => (
                    <Form.Check
                        key={`reparation-${index}`}
                        id={`reparation-${index + 1}`}
                        type={multiple ? 'checkbox' : 'radio'}
                        label={label}
                        value={value}
                        name="reparation"
                        className="form-cracker"
                        checked={isChecked(value)}
                        onChange={formik.handleChange}
                    />
                ))}
            </Form.Group>

            {!intersect(['UNFINISHED', 'WHITE', 'GRAY'], formik.values.reparation) && <Furniture multiple={multiple} formik={formik}/>}
        </div>
    )
}