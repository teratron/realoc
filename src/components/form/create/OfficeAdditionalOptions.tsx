import {CreateType, FormikAware, MultipleOptions, RequiredOptions} from "../../../utils";
import {BuildingState} from "../BuildingState.tsx";
import {BuildingType} from "./BuildingType.tsx";
import {OtherOptions} from "./OtherOptions.tsx";
import {Form} from "react-bootstrap";
import {Required} from "./Required.tsx";
import {Description} from "./Description.tsx";

type Params = FormikAware<CreateType> & RequiredOptions & MultipleOptions
export function OfficeAdditionalOptions({formik, multiple, required}: Params) {
    const reparationOptions: Record<string, string> = {
        'WHITE': 'Varianta albă',
        'GRAY': 'Varianta sură',
        'COSMETIC': 'Reparație cosmetică',
        'EURO': 'Euroreparație',
        'INDIVIDUAL': 'Design individual',
    }

    const otherOptions = {
        'office_dedicated_entrance': 'Intrare separată',
        'office_parking': 'Parcări',
    }

    return (
        <>
            <BuildingState label="Stare oficiu" reparationOptions={reparationOptions} formik={formik} multiple={multiple} required={required}/>

            <div className="app-card">
                <BuildingType formik={formik} required={required}/>
                <OtherOptions options={otherOptions} formik={formik} label='' />
                {formik.values.office_parking === '1' && (
                    <Form.Group>
                        <Form.Label htmlFor="office_parking_lots">
                            Numărul de parcări
                            {required && <Required dataName="office_parking_lots" />}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="office_parking_lots"
                            placeholder="De la"
                            value={formik.values.office_parking_lots}
                            onChange={formik.handleChange}
                        />
                    </Form.Group>
                )}
                <Description formik={formik}/>
            </div>
        </>
    )
}