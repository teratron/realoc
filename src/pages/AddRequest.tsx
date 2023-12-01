import {useNavigate} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import {useState} from 'react'
import {
    ApartmentAdditionalOptions,
    ApartmentOptions,
    CommercialOptions,
    HouseOptions,
    LandOptions,
    OfficeOptions,
    ParkingOptions,
    WarehouseOptions
} from '../components/form'

// Media
// import iconSelectMap from '../media/icon_select_map.svg'

function AddRequest() {
    const navigate = useNavigate()

    const [offertType, setOffertType] = useState("SELL");
    const handleOffertTypeChange = (event: any) => {
        setOffertType(event.target.value)
    }

    const [type, setType] = useState("APARTMENT");
    const handleTypeChange = (event: any) => {
        setType(event.target.value);
    }

    const [aptType, setAptType] = useState("NEW");
    const handleAptType = (value: string) => {
        setAptType(value);
    }

    return (
        <>
            <h2>Caută imobiliare</h2>

            {/* Transaction Block */}
            <div className="app-card">
                <Form.Group>
                    <Form.Label htmlFor="transaction-type-1">Tip tranzacție</Form.Label>
                    <div className="form-tab">
                        <Form.Control
                            id="transaction-type-1"
                            name="offert_type"
                            value="SELL"
                            type="radio"
                            checked={offertType === 'SELL'}
                            onChange={handleOffertTypeChange}
                        />
                        <label htmlFor="transaction-type-1">De vânzare</label>

                        <Form.Control
                            id="transaction-type-2"
                            name="offert_type"
                            value="RENT"
                            type="radio"
                            checked={offertType === 'RENT'}
                            onChange={handleOffertTypeChange}
                        />
                        <label htmlFor="transaction-type-2">De închiriat</label>
                    </div>
                </Form.Group>

                <Form.Group controlId="property-type">
                    <Form.Label>Tip de proprietate</Form.Label>
                    <Form.Select name="type" onChange={handleTypeChange}>
                        <option value="APARTMENT">Apartament</option>
                        <option value="HOUSE">Casă</option>
                        <option value="OFFICE">Oficiu</option>
                        <option value="COMMERCIAL">Spațiu comercial</option>
                        <option value="WAREHOUSE">Spațiu producție/depozit</option>
                        <option value="LAND">Lot de teren</option>
                        <option value="PARKING">Parcare</option>
                    </Form.Select>
                </Form.Group>
            </div>

            {type === "APARTMENT" && (<ApartmentOptions offertType={offertType} onAptTypeChange={handleAptType}/>)}
            {type === "HOUSE" && (<HouseOptions offertType={offertType}/>)}
            {type === "OFFICE" && (<OfficeOptions offertType={offertType}/>)}
            {type === "COMMERCIAL" && (<CommercialOptions offertType={offertType}/>)}
            {type === "WAREHOUSE" && (<WarehouseOptions offertType={offertType}/>)}
            {type === "LAND" && (<LandOptions offertType={offertType}/>)}
            {type === "PARKING" && (<ParkingOptions offertType={offertType}/>)}

            {/******************************************************
             * Location Block
             *******************************************************/}
            <div className="app-card">
                <Form.Group controlId="location-link">
                    <Form.Label>Raion/oraș</Form.Label>
                    <Form.Control
                        name="location"
                        type="text"
                        placeholder="Selectați o locație"
                        onClick={event => {
                            event.preventDefault();
                            navigate('select-location');
                        }}/>
                </Form.Group>

                {/**
                <Form.Group controlId="map">
                    <Form.Label>Zona pe hartă</Form.Label>
                    <InputGroup>
                        <Form.Control name="map" type="text" placeholder="Selectați zona pe hartă"/>
                        <InputGroup.Text>
                            <img src={iconSelectMap} alt=""/>
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                 */}
            </div>

            {type === "APARTMENT" && (<ApartmentAdditionalOptions offertType={offertType} aptType={aptType}/>)}
        </>
    )
}

export default AddRequest
