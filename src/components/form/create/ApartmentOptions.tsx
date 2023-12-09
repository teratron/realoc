import {Form} from 'react-bootstrap'
import {TotalArea} from "./TotalArea.tsx";
import {Price} from "./Price.tsx";
import {PriceUnit} from "./PriceUnit.tsx";
import {Rooms} from "./Rooms.tsx";
import {CreateType, FormikAware} from "../../../utils";
import {Credit} from "./Credit.tsx";

export function ApartmentOptions({formik}: FormikAware<CreateType>) {

    return (
        <div className="app-card">
            <Form.Group>
                <Form.Label>Fond locativ</Form.Label>
                <div className="form-tab">
                    <input
                        id="housing-stock-1"
                        name="apt_building_type"
                        value="NEW"
                        type="radio"
                        checked={formik.values.apt_building_type === 'NEW'}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="housing-stock-1">Construcții noi</label>
                    <input
                        id="housing-stock-2"
                        name="apt_building_type"
                        value="OLD"
                        type="radio"
                        checked={formik.values.apt_building_type === 'OLD'}
                        onChange={formik.handleChange}
                    />
                    <label htmlFor="housing-stock-2">Secundare</label>
                </div>
            </Form.Group>

            <Rooms formik={formik} multiple={false} required={true} />
            <Price formik={formik} required={true} />
            <PriceUnit formik={formik} />
            {formik.values.offert_type === 'SELL' && <Credit formik={formik}/>}

            <TotalArea formik={formik} required={true} label=''/>
        </div>
    )
}
