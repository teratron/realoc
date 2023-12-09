import {CreateType, FormikAware} from "../../../utils";
import {BuildingState} from "../BuildingState.tsx";
import {TotalArea} from "./TotalArea.tsx";
import {ConstructionDate} from "./ConstructionDate.tsx";
import {HouseLevels} from "./HouseLevels.tsx";
import {Children} from "./Children.tsx";
import {Animals} from "./Animals.tsx";
import {Description} from "./Description.tsx";
import {LandArea} from "./LandArea.tsx";

export function HouseAdditionalOptions({formik}: FormikAware<CreateType>) {
    let reparationOptions: Record<string, string> = {
        'COSMETIC': 'Reparație cosmetică',
        'EURO': 'Euroreparație',
        'INDIVIDUAL': 'Design individual',
    }
    if (formik.values.offert_type === 'SELL') {
        reparationOptions = {
            'UNFINISHED': 'Construcții nefinisate',
            'WHITE': 'Varianta albă',
            'GRAY': 'Varianta sură',
            ...reparationOptions
        }
    }

    return (
        <>
            <BuildingState label="Stare casă" reparationOptions={reparationOptions} formik={formik} multiple={false}
                           required={true}/>

            <div className="app-card pb-1">
                <TotalArea formik={formik} required={true} label=''/>
                <LandArea formik={formik} required={true}/>
                <HouseLevels formik={formik} multiple={false}/>
                {formik.values.offert_type === 'SELL' && <ConstructionDate formik={formik} multiple={false}/>}
                {formik.values.offert_type === 'RENT' && (
                    <>
                        <Children formik={formik}/>
                        <Animals formik={formik}/>
                    </>
                )}
                <Description formik={formik}/>
            </div>
        </>
    )
}
