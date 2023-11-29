import {Form} from "react-bootstrap";
import {PriceRange} from "./fields";

// @ts-ignore
export function HouseOptions({offertType}) {
    return (
        <div className="app-card">
            <Form.Group controlId="house-type">
                <Form.Label>Tip de casă</Form.Label>
                {Object.entries({
                    'HOUSE': 'Casa',
                    'TOWNHOUSE': 'Townhouse',
                    'DUPLEX': 'Duplex',
                }).map(([value, label], index) => (
                    <Form.Check
                        key={`house-type-${index}`}
                        id={`house-type-${index + 1}`}
                        type="checkbox"
                        label={label}
                        value={value}
                        name="house_type"
                        className="form-cracker"
                    />
                ))}
            </Form.Group>

            <Form.Group controlId="number-rooms-1">
                <Form.Label>Număr de camere</Form.Label>
                {[
                    '1', '1.5', '2', '2.5', '3', '4.5', '4+'
                ].map((value, index) => (
                    <Form.Check
                        key={`number-rooms-${index}`}
                        id={`number-rooms-${index + 1}`}
                        type="checkbox"
                        label={value}
                        value={value}
                        name="rooms"
                        className="form-cracker"
                    />
                ))}
            </Form.Group>

            <PriceRange offertType={offertType} />
        </div>
    )
}
