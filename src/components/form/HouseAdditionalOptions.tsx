import {BuildingState, ConstructionDate, OtherOptions, TotalArea} from "./fields";
import {Form, InputGroup} from "react-bootstrap";

// @ts-ignore
export function HouseAdditionalOptions({offertType}) {
    let reparationOptions: Record<string, string> = {
        'COSMETIC': 'Reparație cosmetică',
        'EURO': 'Euroreparație',
        'INDIVIDUAL': 'Design individual',
    }
    if (offertType === 'SELL') {
        reparationOptions = {
            'UNFINISHED': 'Construcții nefinisate',
            'WHITE': 'Varianta albă',
            'GRAY': 'Varianta sură',
            ...reparationOptions
        }
    }

    let otherOptions = {
        'apt_kids_allowed': 'Se acceptă copii',
        'apt_animals_allowed': 'Se acceptă animale',
    }

    return (
        <>
            <BuildingState label="Stare casă" reparationOptions={reparationOptions}/>

            <div className="app-card pb-1">
                <TotalArea/>

                <Form.Group>
                    <Form.Label htmlFor="area-from">Suprafață teren</Form.Label>
                    <div className="row">
                        <div className="col">
                            <Form.Control name="house_land_area_from" type="text" placeholder="De la"/>
                        </div>
                        <div className="col">
                            <InputGroup>
                                <Form.Control name="house_land_area_to" type="text" placeholder="Până la"/>
                                <InputGroup.Text>ari</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Niveluri</Form.Label>
                    {[
                        '1', '2', '3', '4+'
                    ].map((value, index) => (
                        <Form.Check
                            key={`floors-${index}`}
                            id={`floors-${index + 1}`}
                            type="checkbox"
                            label={value}
                            value={value}
                            name="house_levels_total"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>

                {offertType === 'SELL' && (<ConstructionDate/>)}
                {offertType === 'RENT' && (<OtherOptions options={otherOptions}/>)}
            </div>
        </>
    )
}
