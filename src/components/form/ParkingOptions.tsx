import {Form} from "react-bootstrap";
import {PriceRange, TotalArea} from "./fields";

type Params = {
    offertType: string
}

export function ParkingOptions({offertType}: Params) {
    return (
        <div className="app-card">
            <Form.Group controlId="parking-type">
                <Form.Label>Tip de parcare</Form.Label>
                {Object.entries({
                    'UNDERGROUND': 'Subterană',
                    'ONSTREET': 'În curte',
                    'GARAGE': 'Garaj',
                }).map(([value, label], index) => (
                    <Form.Check
                        key={`parking-type-${index}`}
                        id={`parking-type-${index + 1}`}
                        type="checkbox"
                        label={label}
                        value={value}
                        name="parking_type"
                        className="form-cracker"
                    />
                ))}
            </Form.Group>

            <PriceRange offertType={offertType}/>
            <TotalArea label="Suprafață de parcare"/>
        </div>
    )
}
