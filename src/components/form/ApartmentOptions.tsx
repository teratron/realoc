import {Form, InputGroup} from 'react-bootstrap'

export function ApartmentOptions() {
    return (
        <div className="app-card">
            <Form.Group>
                <Form.Label htmlFor="housing-stock-1">Fond locativ</Form.Label>
                <div className="form-tab">
                    <input
                        id="housing-stock-1"
                        name="housingStock"
                        value="1"
                        type="radio"
                        defaultChecked={true}
                    />
                    <label htmlFor="housing-stock-1">Construcții noi</label>
                    <input
                        id="housing-stock-2"
                        name="housingStock"
                        value="2"
                        type="radio"
                    />
                    <label htmlFor="housing-stock-2">Secundare</label>
                </div>
            </Form.Group>

            <Form.Group controlId="number-rooms-1">
                <Form.Label>Număr de camere</Form.Label>
                {[
                    '1', '1.5', '2', '2.5', '3', '4.5', '4+'
                ].map((value, index) => (
                    <Form.Check
                        key={`number-rooms-${index}`}
                        id={`number-rooms-${index + 1}`}
                        type="checkbox"
                        label={value}
                        value={value}
                        name="rooms"
                        className="form-cracker"
                    />
                ))}
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="sale-price-from">Preț vânzare</Form.Label>
                <div className="row">
                    <div className="col">
                        <Form.Control
                            id="sale-price-from"
                            type="text"
                            name="price_from"
                            placeholder="De la"
                        />
                    </div>
                    <div className="col">
                        <InputGroup>
                            <Form.Control
                                id="sale-price-to"
                                type="text"
                                name="price_to"
                                placeholder="Până la"
                            />
                            <InputGroup.Text>€</InputGroup.Text>
                        </InputGroup>
                    </div>
                </div>
            </Form.Group>

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

            <Form.Group>
                <Form.Label htmlFor="area-from">Suprafață totală</Form.Label>
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
        </div>
    )
}
