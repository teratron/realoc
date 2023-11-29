import {Form, InputGroup} from "react-bootstrap";

// @ts-ignore
export function TotalArea(props) {
    const label = props.label ? props.label : 'Suprafață totală'
    return (
        <Form.Group>
            <Form.Label htmlFor="area-from">{label}</Form.Label>
            <div className="row">
                <div className="col">
                    <Form.Control id="area-from" name="area_from" type="text" placeholder="De la"/>
                </div>
                <div className="col">
                    <InputGroup>
                        <Form.Control id="area-to" name="area_to" type="text" placeholder="Până la"/>
                        <InputGroup.Text>m²</InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
        </Form.Group>
    )
}
