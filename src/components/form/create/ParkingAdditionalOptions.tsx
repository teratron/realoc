import {CreateType, FormikAware} from "../../../utils";
import {Description} from "./Description.tsx";

export function ParkingAdditionalOptions({formik}: FormikAware<CreateType>) {
    return (
        <>
            <div className="app-card">
                <Description formik={formik}/>
            </div>
        </>
    )
}
