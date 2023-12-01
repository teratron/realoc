import {BuildingState, FloorRange, OtherOptions} from "./fields";

export function CommercialAdditionalOptions() {
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
        'commercial_ramp': 'Rampa',
        'commercial_second_entrance': 'A doua intrare',
    }

    return (
        <>
            <BuildingState label="Stare obiect" reparationOptions={reparationOptions}/>

            <div className="app-card pb-1">
                <FloorRange label="Nivel" options={floorOptions}/>
                <OtherOptions options={otherOptions}/>
            </div>
        </>
    )
}