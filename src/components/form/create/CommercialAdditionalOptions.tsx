import {CreateType, FormikAware, MultipleOptions, RequiredOptions} from "../../../utils";
import {BuildingState} from "../BuildingState.tsx";
import {BuildingType} from "./BuildingType.tsx";
import {OtherOptions} from "./OtherOptions.tsx";
import {Description} from "./Description.tsx";

type Params = FormikAware<CreateType> & RequiredOptions & MultipleOptions
export function CommercialAdditionalOptions({formik, multiple, required}: Params) {
    const reparationOptions: Record<string, string> = {
        'WHITE': 'Varianta albă',
        'GRAY': 'Varianta sură',
        'COSMETIC': 'Reparație cosmetică',
        'EURO': 'Euroreparație',
        'INDIVIDUAL': 'Design individual',
    }

    const otherOptions = {
        'commercial_ramp': 'Rampa',
        'commercial_second_entrance': 'A doua intrare',
    }

    return (
        <>
            <BuildingState label="Stare obiectului" reparationOptions={reparationOptions} formik={formik} multiple={multiple} required={required}/>

            <div className="app-card">
                <BuildingType formik={formik} required={required}/>
                <OtherOptions options={otherOptions} formik={formik} label='' />
                <Description formik={formik}/>
            </div>
        </>
    )
}