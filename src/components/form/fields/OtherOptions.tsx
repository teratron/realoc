import {Form} from "react-bootstrap";

type Params = {
    options: Record<string, string>
}
export function OtherOptions({options}: Params){
    return (
        <Form.Group>
            <Form.Label>Alte condiții</Form.Label>
            {Object.entries(options).map(([name, label], index) => (
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
    )
}
