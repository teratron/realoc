import {useNavigate} from 'react-router-dom'
import {Form, InputGroup} from 'react-bootstrap'
import {useState} from 'react'
import {
    ApartmentOptions,
    CommercialOptions,
    HouseOptions,
    LandOptions,
    OfficeOptions,
    ParkingOptions,
    WarehouseOptions
} from '../components/form'

// Media
import iconSelectMap from '../media/icon_select_map.svg'

function AddRequest() {
    const navigate = useNavigate()
    const [type, setType] = useState("APARTMENT");

    const  handleTypeChange = (event: any) => {
        setType(event.target.value);
    };

    return (
        <>
            <h2>Caută imobiliare</h2>

            {/* Transaction Block */}
            <div className="app-card">
                <Form.Group>
                    <Form.Label htmlFor="transaction-type-1">Tip tranzacție</Form.Label>
                    <div className="form-tab">
                        <input
                            id="transaction-type-1"
                            name="offert_type"
                            value="SELL"
                            type="radio"
                            defaultChecked={true}
                        />
                        <label htmlFor="transaction-type-1">De vânzare</label>
                        <input
                            id="transaction-type-2"
                            name="offert_type"
                            value="RENT"
                            type="radio"
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

            {type === "APARTMENT" && (<ApartmentOptions/>)}
            {type === "HOUSE" && (<HouseOptions/>)}
            {type === "OFFICE" && (<OfficeOptions/>)}
            {type === "COMMERCIAL" && (<CommercialOptions/>)}
            {type === "WAREHOUSE" && (<WarehouseOptions/>)}
            {type === "LAND" && (<LandOptions/>)}
            {type === "PARKING" && (<ParkingOptions/>)}

            {/******************************************************
             * Location Block
             *******************************************************/}
            <div className="app-card">
                <Form.Group controlId="location">
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

                <Form.Group controlId="map">
                    <Form.Label>Zona pe hartă</Form.Label>
                    <InputGroup>
                        <Form.Control name="map" type="text" placeholder="Selectați zona pe hartă"/>
                        <InputGroup.Text>
                            <img src={iconSelectMap} alt=""/>
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </div>

            {/******************************************************
             * Apartment Block
             *******************************************************/}
            <div className="app-card pb-1">
                <Form.Group controlId="apartment-status-1">
                    <Form.Label>Starea apartamentului</Form.Label>
                    {[
                        'Varianta albă',
                        'Varianta sură',
                        'Reparație cosmetică',
                        'Euroreparație',
                        'Design individual'
                    ].map((value, index) => (
                        <Form.Check
                            key={`apartment-status-${index}`}
                            id={`apartment-status-${index + 1}`}
                            type="checkbox"
                            label={value}
                            name="reparation"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>

                <Form.Group controlId="furniture-1">
                    <Form.Label>Mobilier</Form.Label>
                    {[
                        'Nemobilat',
                        'Parțial mobilat',
                        'Mobilat'
                    ].map((value, index) => (
                        <Form.Check
                            key={`furniture-${index}`}
                            id={`furniture-${index + 1}`}
                            type="checkbox"
                            label={value}
                            name="furniture"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>
            </div>

            {/******************************************************
             * Level Block
             *******************************************************/}
            <div className="app-card pb-1">
                <Form.Group controlId="levels">
                    <Form.Label>Nivel</Form.Label>
                    <div className="row">
                        <div className="col">
                            <Form.Select name="level_from">
                                <option>De la</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </Form.Select>
                        </div>
                        <div className="col">
                            <Form.Select id="levels-to" name="level_to">
                                <option>Până la</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </Form.Select>
                        </div>
                    </div>
                </Form.Group>

                <Form.Group>
                    {[
                        'Nu la parterul',
                        'Nu la ultimul',
                        'La ultimul'
                    ].map((value, index) => (
                        <Form.Check
                            key={`option-levels-${index}`}
                            id={`option-levels-${index + 1}`}
                            type="checkbox"
                            label={value}
                            name="optionLevels"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="number-levels-from">Număr de nivele în casă</Form.Label>
                    <div className="row">
                        <div className="col">
                            <Form.Select id="number-levels-from">
                                <option>De la</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </Form.Select>
                        </div>
                        <div className="col">
                            <Form.Select id="number-levels-to">
                                <option>Până la</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </Form.Select>
                        </div>
                    </div>
                </Form.Group>

                <Form.Group controlId="ascensor-1">
                    <Form.Label>Ascensor</Form.Label>
                    {[
                        'Este',
                        'Absent'
                    ].map((value, index) => (
                        <Form.Check
                            key={`ascensor-${index}`}
                            id={`ascensor-${index + 1}`}
                            type="checkbox"
                            label={value}
                            name="elevator"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>

                <Form.Group controlId="parking-1">
                    <Form.Label>Parcare</Form.Label>
                    {[
                        'Subterană',
                        'În curtea',
                        'Garaj'
                    ].map((value, index) => (
                        <Form.Check
                            key={`parking-${index}`}
                            id={`parking-${index + 1}`}
                            type="checkbox"
                            label={value}
                            name="apt_parking"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>

                <Form.Group controlId="developer">
                    <Form.Label>Dezvoltator</Form.Label>
                    <Form.Select name="apt_developer">
                        <option>Selectați dezvoltator</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="exploitation-1">
                    <Form.Label>Predare în exploatare</Form.Label>
                    {[
                        'Dat în exploatare', '2023', '2024', '2025', '2026', '2027+'
                    ].map((value, index) => (
                        <Form.Check
                            key={`exploitation-${index}`}
                            id={`exploitation-${index + 1}`}
                            type="checkbox"
                            label={value}
                            name="apt_construction_date"
                            className="form-cracker"
                        />
                    ))}
                </Form.Group>
            </div>
        </>
    )
}

export default AddRequest
