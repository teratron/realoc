import {Form} from "react-bootstrap";
import {LandArea, PriceRange} from "./fields";
import {ChangeEvent} from "react";

type Params = {
    offertType: string
    onLandTypeChange: (value: string) => void
}

export function LandOptions({offertType, onLandTypeChange}: Params) {
    const handleLandTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        onLandTypeChange(event.target.value)
    }

    return (
        <div className="app-card">
            <Form.Group>
                <Form.Label>Tip de teren</Form.Label>
                <div className="form-tab">
                    {Object.entries({
                        'AGRO': 'Agricol',
                        'BUILDING': 'De construcții',
                        'LAKE': 'Cu lac'
                    }).map(([value, label], index) => (
                        <>
                            <input
                                key={`land-type-${index}`}
                                id={`land-type-${index + 1}`}
                                name="land_type"
                                value={value}
                                type="radio"
                                defaultChecked={value === 'AGRO'}
                                onChange={handleLandTypeChange}
                            />
                            <label htmlFor={`land-type-${index + 1}`}>{label}</label>
                        </>
                    ))}
                </div>
            </Form.Group>

            <PriceRange offertType={offertType} />
            <LandArea />
        </div>
    )
}
