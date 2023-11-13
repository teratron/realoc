import {Form} from 'react-bootstrap'
import AttrCommon from '../../utils/Attribute.tsx'

function PropertyType(props: AttrCommon) {
    return (
        <Form.Group className={props.className} controlId={props.id}>
            <Form.Label>{props.title}</Form.Label>
            <Form.Select aria-label="">
                <option>Apartament</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Form.Group>
    )
}

export default PropertyType

