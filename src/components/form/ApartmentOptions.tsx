import {Form} from 'react-bootstrap'
import {PriceRange, PriceUnit, TotalArea} from "./fields";

// @ts-ignore
export function ApartmentOptions({offertType}) {
    return (
        <div className="app-card">
            <Form.Group>
                <Form.Label>Fond locativ</Form.Label>
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

            <PriceRange offertType={offertType} />
            <PriceUnit />
            <TotalArea />
        </div>
    )
}
