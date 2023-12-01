import {Form, InputGroup} from "react-bootstrap";
import {ChangeEvent, useState} from "react";

export function LandArea() {
    const units: Record<string, {label: string, short: string}> = {
        'ar': {
            label: 'Ari',
            short: 'ari',
        },
        'ha': {
            label: 'Hectare',
            short: 'ha',
        },
    }

    const [unit, setUnit] = useState("ar");
    const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
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
                            <InputGroup.Text>{units[unit].short}</InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
            </Form.Group>
            <Form.Group>
                {Object.entries(units).map(([value, data], index) => (
                    <Form.Check
                        key={`land-area-unit-${index}`}
                        id={`land-area-unit-${index + 1}`}
                        type="radio"
                        label={data.label}
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
