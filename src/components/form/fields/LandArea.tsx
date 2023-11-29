import {Form, InputGroup} from "react-bootstrap";
import {useState} from "react";

export function LandArea() {
    const [unit, setUnit] = useState("ari");
    const handleUnitChange = (event: any) => {
        setUnit(event.target.value);
    };

    return (
        <>
            <Form.Group>
                <Form.Label htmlFor="area-from">Suprafață teren</Form.Label>
                <div className="row">
                    <div className="col">
                        <Form.Control id="area-from" name="area_from" type="text" placeholder="De la"/>
                    </div>
                    <div className="col">
                        <InputGroup>
                            <Form.Control id="area-to" name="area_to" type="text" placeholder="Până la"/>
                            <InputGroup.Text>{unit}</InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
            </Form.Group>
            <Form.Group>
                {Object.entries({
                    'ari': 'Ari',
                    'hec': 'Hectare'
                }).map(([value, label], index) => (
                    <Form.Check
                        key={`land-area-unit-${index}`}
                        id={`land-area-unit-${index + 1}`}
                        type="radio"
                        label={label}
                        value={value}
                        name="land_area_unit"
                        checked={value === unit}
                        onChange={handleUnitChange}
                        inline
                    />
                ))}
            </Form.Group>
        </>
    )
}
