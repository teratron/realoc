import {CreateType, FormikAware, MultipleOptions} from "../../../utils";
import {BuildingState} from "../BuildingState.tsx";
import {Floor} from "./Floor.tsx";
import {FloorsTotal} from "./FloorsTotal.tsx";
import {Lift} from "./Lift.tsx";
import {Parking} from "./Parking.tsx";
import {ApartmentDeveloper} from "./ApartmentDeveloper.tsx";
import {ConstructionDate} from "./ConstructionDate.tsx";
import {Children} from "./Children.tsx";
import {Animals} from "./Animals.tsx";
import {Description} from "./Description.tsx";

export function ApartmentAdditionalOptions({formik, multiple}: FormikAware<CreateType> & MultipleOptions) {
    let reparationOptions: Record<string, string> = {
        'COSMETIC': 'Reparație cosmetică',
        'EURO': 'Euroreparație',
        'INDIVIDUAL': 'Design individual',
    }
    if (formik.values.offert_type === 'SELL' && formik.values.apt_building_type === 'NEW') {
        reparationOptions = {
            'WHITE': 'Varianta albă',
            'GRAY': 'Varianta sură',
            ...reparationOptions
        }
    }
    if (formik.values.apt_building_type === 'OLD') {
        reparationOptions = {
            ...reparationOptions,
            'REQUIRED': 'Reparații necesare'
        }
    }

    return (
        <>
            <BuildingState
                formik={formik}
                label="Starea apartamentului"
                reparationOptions={reparationOptions}
                multiple={false}
            />

            <div className="app-card">
                <Floor formik={formik} label="Etaj" required={true}/>
                <FloorsTotal formik={formik} label="Numărul de etaje" required={true}/>
                <Lift formik={formik}/>
                {formik.values.offert_type === 'SELL' && <Parking formik={formik}/>}
                <ApartmentDeveloper formik={formik} multiple={multiple}/>
                {formik.values.offert_type === 'SELL' && <ConstructionDate formik={formik}/>}
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