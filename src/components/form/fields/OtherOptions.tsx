import {Form} from "react-bootstrap";

type Params = {
    options: Record<string, string>
    label?: string
}

export function OtherOptions({options, label}: Params) {
    const title = label ? label : 'Alte condiții'
    const keyPrefix = hashCode(title)
    return (
        <Form.Group>
            <Form.Label>{title}</Form.Label>
            {Object.entries(options).map(([name, label], index) => (
                <Form.Check
                    key={`${keyPrefix}-${index}`}
                    id={`${keyPrefix}-${index + 1}`}
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


function hashCode(s: string) {
    return s.split("").reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
    }, 0);
}
