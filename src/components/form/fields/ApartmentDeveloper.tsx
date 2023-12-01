import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export function ApartmentDeveloper() {
    const navigate = useNavigate()
    return (
        <Form.Group controlId="developer-link">
            <Form.Label>Dezvoltator</Form.Label>
            <Form.Control
                name="apt_developer"
                type="text"
                placeholder="Selectați dezvoltator"
                onClick={event => {
                    event.preventDefault();
                    navigate('select-developer');
                }}/>
        </Form.Group>
    )
}