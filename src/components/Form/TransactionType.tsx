import {Form, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import AttrCommon from '../../utils/Attribute.tsx'

function TransactionType(props: AttrCommon) {
    return (
        <Form.Group className={props.className} controlId={props.id}>
            <Form.Label>{props.title}</Form.Label>
            <div>
                <ToggleButtonGroup type="radio" name="options-1" defaultValue={1}>
                    <ToggleButton variant="outline-primary" id="tbg-radio-1-1" value={1}>
                        De vanzare
                    </ToggleButton>
                    <ToggleButton variant="outline-primary" id="tbg-radio-1-2" value={2}>
                        De inchiriat
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </Form.Group>
    )
}

export default TransactionType

/*<div>
    <Form.Check
        inline
        label="De vanzare"
        name="group-1-1"
        type="radio"
        id="inline-radio-1-1-1"/>
    <Form.Check
        inline
        label="De inchiriat"
        name="group-1-1"
        type="radio"
        id="inline-radio-1-1-2"/>
</div>*/
