import {Form} from "react-bootstrap";
import {ApartmentDeveloper, BuildingState, ConstructionDate, FloorRange, OtherOptions} from "./fields";

type Params = {
    offertType: string
    aptType: string
}

export function ApartmentAdditionalOptions({offertType, aptType}: Params) {
    let reparationOptions: Record<string, string> = {
        'COSMETIC': 'Reparație cosmetică',
        'EURO': 'Euroreparație',
        'INDIVIDUAL': 'Design individual',
    }
    if (offertType === 'SELL' && aptType === 'NEW') {
        reparationOptions = {
            'WHITE': 'Varianta albă',
            'GRAY': 'Varianta sură',
            ...reparationOptions
        }
    }
    if (aptType === 'OLD') {
        reparationOptions = {
            ...reparationOptions,
            'REQUIRED': 'Reparații necesare'
        }
    }

    let otherOptions: Record<string, string> = {
        'elevator': 'Ascensor'
    }
    if (offertType === 'RENT') {
        otherOptions = {
            ...otherOptions,
            'apt_kids_allowed': 'Se acceptă copii',
            'apt_animals_allowed': 'Se acceptă animale',
        }
    }

    const floorOptions = {
        'not_parterre': 'Nu la parter',
        'not_last': 'Nu la ultimul',
        'last': 'La ultimul',
    }

    return (
        <>
            <BuildingState label="Starea apartamentului" reparationOptions={reparationOptions}/>

            <div className="app-card pb-1">
                <FloorRange label="Etaj" options={floorOptions}/>

                <Form.Group>
                    <Form.Label htmlFor="number-levels-from">Număr de nivele în casă</Form.Label>
                    <div className="row">
                        <div className="col">
                            <Form.Control
                                type="text"
                                name="apt_levels_total_from"
                                placeholder="De la"
                            />
                        </div>
                        <div className="col">
                            <Form.Control
                                type="text"
                                name="apt_levels_total_to"
                                placeholder="Până la"
                            />
                        </div>
                    </div>
                </Form.Group>

                <ApartmentDeveloper/>

                <Form.Group controlId="heating">
                    <Form.Label>Încălzire</Form.Label>
                    {Object.entries({
                        'PRIVATE': 'Autonomă',
                        'CENTRALIZED': 'Centrală',
                    }).map(([value, label], index) => (
                        <Form.Check
                            key={`heating-${index}`}
                            id={`heating-${index + 1}`}
                            type="checkbox"
                            label={label}
                            value={value}
                            name="heating"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>

                {offertType === 'SELL' && (
                    <>
                        <Form.Group controlId="parking-1">
                            <Form.Label>Parcare</Form.Label>
                            {Object.entries({
                                'UNDERGROUND': 'Subterană',
                                'ONSTREET': 'În curte',
                                'GARAGE': 'Garaj',
                            }).map(([value, label], index) => (
                                <Form.Check
                                    key={`parking-${index}`}
                                    id={`parking-${index + 1}`}
                                    type="checkbox"
                                    label={label}
                                    value={value}
                                    name="apt_parking"
                                    className="form-cracker"
                                />
                            ))}
                        </Form.Group>

                        <ConstructionDate/>
                    </>
                )}

                <OtherOptions options={otherOptions} />
            </div>
        </>
    )
}