import {useState} from 'react'
import {Form, InputGroup, ToggleButton, ToggleButtonGroup} from 'react-bootstrap'
import Header from '../containers/Header'
import Main from '../containers/Main'

// Media
import iconSelectMap from '../assets/media/icon_select_map.svg'

const title: string = 'Add Request'

function AddRequest() {
    const [count, setCount] = useState(254)

    return (
        <>
            <Header title={title} idResetButton="add-request-form"/>
            <Main>
                <h2>Caută imobiliare</h2>

                <Form id="add-request-form" className="app-form">

                    {/******************************************************
                     * Transaction Block
                     *******************************************************/}
                    <div className="app-card">
                        <Form.Group controlId="transaction-type-1">
                            <Form.Label>Tip tranzacție</Form.Label>
                            <div>
                                <ToggleButtonGroup type="radio" name="transactionType" defaultValue={1}>
                                    <ToggleButton variant="outline-primary" id="transaction-type-1" value={1}>
                                        De vânzare
                                    </ToggleButton>
                                    <ToggleButton variant="outline-primary" id="transaction-type-2" value={2}>
                                        De închiriat
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="property-type">
                            <Form.Label>Tip de proprietate</Form.Label>
                            <Form.Select name="propertyType">
                                <option>Apartament</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </Form.Select>
                        </Form.Group>
                    </div>

                    {/******************************************************
                     * Housing Block
                     *******************************************************/}
                    <div className="app-card">
                        <Form.Group>
                            <Form.Label htmlFor="housing-stock-1">Fond locativ</Form.Label>
                            <div>
                                <ToggleButtonGroup type="radio" name="housingStock" defaultValue={1}>
                                    <ToggleButton variant="outline-primary" id="housing-stock-1" value={1}>
                                        Construcții noi
                                    </ToggleButton>
                                    <ToggleButton variant="outline-primary" id="housing-stock-2" value={2}>
                                        Secundare
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="number-rooms-1">
                            <Form.Label>Număr de camere</Form.Label>
                            <div>
                                {[
                                    '1', '1.5', '2', '2.5', '3', '4.5', '4+'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`number-rooms-${index}`}
                                        id={`number-rooms-${index + 1}`}
                                        type="checkbox"
                                        label={value}
                                        value={value}
                                        name="numberRooms"
                                        inline/>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="sale-price-from">Preț vânzare</Form.Label>
                            <div className="row">
                                <div className="col">
                                    <Form.Control id="sale-price-from" type="text" name="salePrice" placeholder="De la"/>
                                </div>
                                <div className="col">
                                    <InputGroup>
                                        <Form.Control
                                            id="sale-price-to"
                                            type="text"
                                            name="salePrice"
                                            placeholder="Până la"/>
                                        <InputGroup.Text>€</InputGroup.Text>
                                    </InputGroup>
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group>
                            {[
                                'Preț total',
                                'Preț m²'
                            ].map((value, index) => (
                                <Form.Check
                                    key={`price-type-${index}`}
                                    id={`price-type-${index + 1}`}
                                    type="radio"
                                    label={value}
                                    value={value}
                                    name="priceType"
                                    inline/>
                            ))}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="area-from">Suprafață totală</Form.Label>
                            <div className="row">
                                <div className="col">
                                    <Form.Control id="area-from" name="area" type="text" placeholder="De la"/>
                                </div>
                                <div className="col">
                                    <InputGroup>
                                        <Form.Control id="area-to" name="area" type="text" placeholder="Până la"/>
                                        <InputGroup.Text>m²</InputGroup.Text>
                                    </InputGroup>
                                </div>
                            </div>
                        </Form.Group>
                    </div>

                    {/******************************************************
                     * Location Block
                     *******************************************************/}
                    <div className="app-card">
                        <>
                            <Form.Group controlId="location">
                                <Form.Label>Raion/oraș</Form.Label>
                                <Form.Select name="location">
                                    <option>Selectați o locație</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </Form.Select>
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
                        </>
                    </div>

                    {/******************************************************
                     * Apartment Block
                     *******************************************************/}
                    <div className="app-card">
                        <Form.Group controlId="apartment-status-1">
                            <Form.Label>Starea apartamentului</Form.Label>
                            <div>
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
                                        name="apartmentStatus"
                                        inline/>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="furniture-1">
                            <Form.Label>Mobilier</Form.Label>
                            <div>
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
                                        inline/>
                                ))}
                            </div>
                        </Form.Group>
                    </div>

                    {/******************************************************
                     * Level Block
                     *******************************************************/}
                    <div className="app-card">
                        <Form.Group controlId="levels">
                            <Form.Label>Nivel</Form.Label>
                            <div className="row">
                                <div className="col">
                                    <Form.Select name="levels">
                                        <option>De la</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                    </Form.Select>
                                </div>
                                <div className="col">
                                    <Form.Select id="levels-to" name="levels">
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
                                    inline/>
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
                            <div>
                                {[
                                    'Este',
                                    'Absent'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`ascensor-${index}`}
                                        id={`ascensor-${index + 1}`}
                                        type="checkbox"
                                        label={value}
                                        name="ascensor"
                                        inline/>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="parking-1">
                            <Form.Label>Parcare</Form.Label>
                            <div>
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
                                        name="parking"
                                        inline/>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="developer">
                            <Form.Label>Dezvoltator</Form.Label>
                            <Form.Select>
                                <option>Selectați dezvoltator</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="exploitation-1">
                            <Form.Label>Predare în exploatare</Form.Label>
                            <div>
                                {[
                                    'Dat în exploatare', '2023', '2024', '2025', '2026', '2027+'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`exploitation-${index}`}
                                        id={`exploitation-${index + 1}`}
                                        type="checkbox"
                                        label={value}
                                        name="exploitation"
                                        inline/>
                                ))}
                            </div>
                        </Form.Group>
                    </div>

                    <div className="navbar">
                        <div className="app-container">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() => setCount((count) => count + 1)}>
                                Afișați {count} de anunțuri
                            </button>
                        </div>
                    </div>
                </Form>
            </Main>
        </>
    )
}

export default AddRequest
