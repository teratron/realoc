import {Form} from "react-bootstrap";
import {CreateType, CustomLabel, FormikAware, MultipleOptions} from "../../utils";
import {Furniture} from "./create/Furniture.tsx";

type Params = FormikAware<CreateType> & CustomLabel & MultipleOptions & {
    reparationOptions: Record<string, string>
}

export function BuildingState({label, reparationOptions, multiple, formik}: Params) {

    const intersect = (array1: string[], array2: string|string[]): boolean => {
        const intersection = array1.filter(value => array2.includes(value))
        return intersection.length > 0
    }

    return(
        <div className="app-card pb-1">
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                {Object.entries(reparationOptions).map(([value, label], index) => (
                    <Form.Check
                        key={`apartment-status-${index}`}
                        id={`apartment-status-${index + 1}`}
                        type={multiple ? 'checkbox' : 'radio'}
                        label={label}
                        value={value}
                        name="reparation"
                        className="form-cracker"
                        checked={formik.values.reparation.includes(value)}
                        onChange={formik.handleChange}
                    />
                ))}
            </Form.Group>

            {!intersect(['WHITE', 'GRAY'], formik.values.reparation) && <Furniture multiple={multiple} formik={formik}/>}
        </div>
    )
}