import {Form} from "react-bootstrap";
export function Furniture() {
    return (
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
    )
}