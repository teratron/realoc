// @ts-ignore
import {Form} from "react-bootstrap";
import {LandArea, PriceRange} from "./fields";

// @ts-ignore
export function LandOptions({offertType}) {
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
