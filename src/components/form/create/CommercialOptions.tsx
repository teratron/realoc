import {CreateType, FormikAware, RequiredOptions} from "../../../utils";
import {Price} from "./Price.tsx";
import {PriceUnit} from "./PriceUnit.tsx";
import {Credit} from "./Credit.tsx";
import {TotalArea} from "./TotalArea.tsx";
import {Owner} from "./Owner.tsx";

export function CommercialOptions({formik, required}: FormikAware<CreateType> & RequiredOptions) {
    return (
        <div className="app-card">
            <Price formik={formik} required={required}/>
            <PriceUnit formik={formik}/>
            {formik.values.offert_type === 'SELL' && <Credit formik={formik}/>}
            <TotalArea formik={formik} required={required} label=""/>
            <Owner formik={formik} required={required} />
        </div>
    )
}
