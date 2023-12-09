import {CreateType, FormikAware, MultipleOptions, RequiredOptions} from "../../../utils";
import {BuildingType} from "./BuildingType.tsx";
import {OtherOptions} from "./OtherOptions.tsx";
import {Description} from "./Description.tsx";
import {Form} from "react-bootstrap";

type Params = FormikAware<CreateType> & RequiredOptions & MultipleOptions
export function WarehouseAdditionalOptions({formik, multiple, required}: Params) {
    const otherOptions = {
        'warehouse_heating': 'Încălzire',
        'warehouse_office': 'Oficii',
        'warehouse_wc': 'Bloc sanitar',
        'warehouse_parking': 'Parcare',
    }

    const isChecked = (value: string): boolean => {
        if (multiple && Array.isArray(formik.values.warehouse_class)) {
            return formik.values.warehouse_class.includes(value)
        } else {
            return formik.values.warehouse_class === value
        }
    }

    return (
        <>
            <div className="app-card">
                <BuildingType formik={formik} required={required}/>
                <Form.Group>
                    <Form.Label>Clasa spațiu</Form.Label>
                    {[
                        'A', 'B', 'C', 'D'
                    ].map((value, index) => (
                        <Form.Check
                            key={`warehouse-class-${index}`}
                            id={`warehouse-class-${index + 1}`}
                            type={multiple ? 'checkbox' : 'radio'}
                            label={value}
                            value={value}
                            name="warehouse_class"
                            className="form-cracker"
                            checked={isChecked(value)}
                            onChange={formik.handleChange}
                        />
                    ))}
                </Form.Group>
                <OtherOptions options={otherOptions} formik={formik} label='' />
                <Description formik={formik}/>
            </div>
        </>
    )
}