import {CreateType, FormikAware, MultipleOptions, RequiredOptions} from "../../../utils";
import {Price} from "./Price.tsx";
import {HouseType} from "./HouseType.tsx";
import {Rooms} from "./Rooms.tsx";
import {Credit} from "./Credit.tsx";

type Params = FormikAware<CreateType> & MultipleOptions & RequiredOptions

export function HouseOptions({formik, multiple, required}: Params) {
    return (
        <div className="app-card">
            <HouseType formik={formik} multiple={multiple} required={required}/>
            <Rooms formik={formik} multiple={multiple} required={required}/>
            <Price formik={formik} required={required}/>
            {formik.values.offert_type === 'SELL' && <Credit formik={formik}/>}
        </div>
    )
}
