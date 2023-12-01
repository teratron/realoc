import {Form} from "react-bootstrap";
import {useState} from "react";
import {ApartmentDeveloper, ConstructionDate} from "./fields";

// @ts-ignore
export function ApartmentAdditionalOptions({offertType, aptType}) {
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

    const [reparation, setReparation] = useState<string[]>([])
    const handleReparationChange = (event: any) => {
        let result
        if (event.target.checked) {
            result = [...reparation, event.target.value]
        } else {
            result = reparation.filter((r) => r != event.target.value)
        }
        setReparation(result)
    }

    const intersect = (array1: string[], array2: string[]): boolean => {
        const intersection = array1.filter(value => array2.includes(value))
        return intersection.length > 0
    }

    return (
        <>
            <div className="app-card pb-1">
                <Form.Group controlId="apartment-status-1">
                    <Form.Label>Starea apartamentului</Form.Label>
                    {Object.entries(reparationOptions).map(([value, label], index) => (
                        <Form.Check
                            key={`apartment-status-${index}`}
                            id={`apartment-status-${index + 1}`}
                            type="checkbox"
                            label={label}
                            value={value}
                            name="reparation"
                            className="form-cracker"
                            onChange={handleReparationChange}
                        />
                    ))}
                </Form.Group>

                {!intersect(['WHITE', 'GRAY'], reparation) && (
                    <Form.Group controlId="furniture-1">
                        <Form.Label>Mobilier</Form.Label>
                        {Object.entries({
                            'NO': 'Nemobilat',
                            'PART': 'Parțial mobilat',
                            'FULL': 'Mobilat',
                        }).map(([value, label], index) => (
                            <Form.Check
                                key={`furniture-${index}`}
                                id={`furniture-${index + 1}`}
                                type="checkbox"
                                label={label}
                                value={value}
                                name="furniture"
                                className="form-cracker"
                            />
                        ))}
                    </Form.Group>
                )}
            </div>

            <div className="app-card pb-1">
                <Form.Group controlId="levels">
                    <Form.Label>Nivel</Form.Label>
                    <div className="row">
                        <div className="col">
                            <Form.Control
                                type="text"
                                name="level_from"
                                placeholder="De la"
                            />
                        </div>
                        <div className="col">
                            <Form.Control
                                type="text"
                                name="level_to"
                                placeholder="Până la"
                            />
                        </div>
                    </div>
                </Form.Group>

                <Form.Group>
                    {Object.entries({
                        'not_parterre': 'Nu la parter',
                        'not_last': 'Nu la ultimul',
                        'last': 'La ultimul',
                    }).map(([value, label], index) => (
                        <Form.Check
                            key={`option-levels-${index}`}
                            id={`option-levels-${index + 1}`}
                            type="checkbox"
                            label={label}
                            value={value}
                            name="apt_level_option"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>

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

                {/*
                <Form.Group controlId="ascensor-1">
                    <Form.Label>Ascensor</Form.Label>
                    {[
                        'Este',
                        'Absent'
                    ].map((value, index) => (
                        <Form.Check
                            key={`ascensor-${index}`}
                            id={`ascensor-${index + 1}`}
                            type="checkbox"
                            label={value}
                            name="elevator"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>
                */}

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

                <Form.Group>
                    <Form.Label>Alte condiții</Form.Label>
                    {Object.entries(otherOptions).map(([name, label], index) => (
                        <Form.Check
                            key={`other-options-${index}`}
                            id={`other-options-${index + 1}`}
                            type="checkbox"
                            label={label}
                            value="1"
                            name={name}
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>

            </div>
        </>
    )
}