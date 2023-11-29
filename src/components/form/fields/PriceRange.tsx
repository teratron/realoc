import {Form, InputGroup} from "react-bootstrap";

// @ts-ignore
export function PriceRange({offertType}) {
    return (
        <Form.Group>
            <Form.Label htmlFor="sale-price-from">{offertType === 'SELL' ? 'Preț vânzare' : 'Preț chirie/lună'}</Form.Label>
            <div className="row">
                <div className="col">
                    <Form.Control
                        type="text"
                        name="price_from"
                        placeholder="De la"
                    />
                </div>
                <div className="col">
                    <InputGroup>
                        <Form.Control
                            type="text"
                            name="price_to"
                            placeholder="Până la"
                        />
                        <InputGroup.Text>€</InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
        </Form.Group>
    )
}
