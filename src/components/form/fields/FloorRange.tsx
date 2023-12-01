import {Form} from "react-bootstrap";

type Params = {
    label: string
    options: Record<string, string>
}
export function FloorRange({label, options}: Params) {
    return (
        <>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <div className="row">
                    <div className="col">
                        <Form.Control
                            type="text"
                            name="level_from"
                            placeholder="De la"
                        />
                    </div>
                    <div className="col">
                        <Form.Control
                            type="text"
                            name="level_to"
                            placeholder="Până la"
                        />
                    </div>
                </div>
            </Form.Group>

            <Form.Group>
                {Object.entries(options).map(([value, label], index) => (
                    <Form.Check
                        key={`option-levels-${index}`}
                        id={`option-levels-${index + 1}`}
                        type="checkbox"
                        label={label}
                        value={value}
                        name="level_options"
                        className="form-cracker"
                    />
                ))}
            </Form.Group>
        </>
    )
}