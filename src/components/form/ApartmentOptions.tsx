import {Form} from 'react-bootstrap'
import {PriceRange, PriceUnit, TotalArea} from "./fields";

type Params = {
    offertType: string
    onAptTypeChange: (value: string) => void
}

export function ApartmentOptions({offertType, onAptTypeChange}: Params) {
    const handleAptTypeChange = (event: any) => {
        onAptTypeChange(event.target.value)
    }

    return (
        <div className="app-card">
            <Form.Group>
                <Form.Label>Fond locativ</Form.Label>
                <div className="form-tab">
                    <input
                        id="housing-stock-1"
                        name="apt_type"
                        value="NEW"
                        type="radio"
                        defaultChecked={true}
                        onChange={handleAptTypeChange}
                    />
                    <label htmlFor="housing-stock-1">Construcții noi</label>
                    <input
                        id="housing-stock-2"
                        name="apt_type"
                        value="OLD"
                        type="radio"
                        onChange={handleAptTypeChange}
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
