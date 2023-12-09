import {CreateType, FormikAware, RequiredOptions} from "../../../utils";
import {Form} from "react-bootstrap";
import {Required} from "./Required.tsx";
import {Floor} from "./Floor.tsx";
import {FloorsTotal} from "./FloorsTotal.tsx";
import {LandArea} from "./LandArea.tsx";

export function BuildingType({formik, required}: FormikAware<CreateType> & RequiredOptions) {
    return (
        <>
            <Form.Group>
                <Form.Label>
                    Tip de plasare
                    {required && <Required dataName="office_type_building"/>}
                </Form.Label>
                {Object.entries({
                    0: 'Nivel particular',
                    1: 'Întreaga clădire',
                }).map(([value, label], index) => (
                    <Form.Check
                        key={`office_type_building-${index}`}
                        id={`office_type_building-${index + 1}`}
                        type="radio"
                        label={label}
                        value={value}
                        name="office_type_building"
                        className="form-cracker"
                        checked={formik.values.office_type_building === value}
                        onChange={formik.handleChange}
                    />
                ))}
            </Form.Group>
            {formik.values.office_type_building === '0' && <Floor formik={formik} required={required} label="Nivel"/>}
            {formik.values.office_type_building && <FloorsTotal label="Număr de nivele in clădire" required={required} formik={formik}/>}
            {formik.values.office_type_building === '1' && <LandArea formik={formik} required={required}/>}
        </>
    )
}