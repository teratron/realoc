import {Form} from "react-bootstrap";

export function PriceUnit() {
    return (
        <Form.Group>
            {Object.entries({
                'total': 'Preț total',
                'm2': 'Preț m²'
            }).map(([value, label], index) => (
                <Form.Check
                    key={`price-type-${index}`}
                    id={`price-type-${index + 1}`}
                    type="radio"
                    label={label}
                    value={value}
                    name="priceType"
                    inline
                />
            ))}
        </Form.Group>
    )
}
