import {BuildingState, FloorRange, OtherOptions} from "./fields";

export function OfficeAdditionalOptions() {
    const reparationOptions: Record<string, string> = {
        'WHITE': 'Varianta albă',
        'GRAY': 'Varianta sură',
        'COSMETIC': 'Reparație cosmetică',
        'EURO': 'Euroreparație',
        'INDIVIDUAL': 'Design individual',
    }

    const floorOptions = {
        'parterre': 'Parter',
        'not_plinth': 'Nu plintă',
        'not_basement': 'Nu subsol',
    }

    const otherOptions = {
        'office_dedicated_entrance': 'Intrare separată',
        'office_type_building': 'Clădire independentă',
        'office_parking': 'Parcări',
    }

    return (
        <>
            <BuildingState label="Stare oficiu" reparationOptions={reparationOptions}/>

            <div className="app-card pb-1">
                <FloorRange label="Nivel" options={floorOptions}/>
                <OtherOptions options={otherOptions}/>
            </div>
        </>
    )
}