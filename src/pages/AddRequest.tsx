import {useNavigate} from 'react-router-dom'
import {FormEvent, useCallback, useState} from 'react'
import {Form, InputGroup} from 'react-bootstrap'
import debounce from 'lodash.debounce'
import Header from '../containers/Header'
import Main from '../containers/Main'
import {formData, search, searchCount} from '../api'

// Media
import iconSelectMap from '../assets/media/icon_select_map.svg'

const title: string = 'Add Request'

function AddRequest() {
    const navigate = useNavigate();

    const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const searchResult = await search(formData(event.currentTarget))
        console.log('formSubmitHandler', searchResult);
    }

    const formChangeHandler = async (event: FormEvent<HTMLFormElement>) => {
        // @ts-ignore TS does not recognize .form
        const form = event.target.form
        const total = await searchCount(formData(form))
        setCount(() => total)
    }

    const debouncedFormChangeHandler = useCallback(debounce(formChangeHandler, 1000), []);

    return (
        <>
            <Header title={title} resetButton={{id: 'add-request-form', badge: 99}}/>
            <Main>
                <h2>Caută imobiliare</h2>

                <Form id="add-request-form" className="app-form" onSubmitCapture={formSubmitHandler} onChange={debouncedFormChangeHandler}>

                    {/******************************************************
                     * Transaction Block
                     *******************************************************/}
                    <div className="app-card">
                        <Form.Group>
                            <Form.Label htmlFor="transaction-type-1">Tip tranzacție</Form.Label>
                            <div className="form-tab">
                                <input
                                    id="transaction-type-1"
                                    name="transactionType"
                                    value="1"
                                    type="radio"
                                    defaultChecked={true}/>
                                <label htmlFor="transaction-type-1">De vânzare</label>
                                <input
                                    id="transaction-type-2"
                                    name="transactionType"
                                    value="2"
                                    type="radio"/>
                                <label htmlFor="transaction-type-2">De închiriat</label>
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
                    <div className="form-tab">
                        <input
                            id="housing-stock-1"
                            name="housingStock"
                            value="1"
                            type="radio"
                            defaultChecked={true}/>
                        <label htmlFor="housing-stock-1">Construcții noi</label>
                        <input
                            id="housing-stock-2"
                            name="housingStock"
                            value="2"
                            type="radio"/>
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
                            name="numberRooms"
                            className="form-cracker"/>
                    ))}
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="sale-price-from">Preț vânzare</Form.Label>
                    <div className="row">
                        <div className="col">
                            <Form.Control
                                id="sale-price-from"
                                type="text"
                                name="salePrice"
                                placeholder="De la"/>
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
                <Form.Group controlId="location">
                    <Form.Label>Raion/oraș</Form.Label>
                    <Form.Control
                        name="location"
                        type="text"
                        placeholder="Selectați o locație"
                        onClick={e => {
                            e.preventDefault();
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
                            name="apartmentStatus"
                            className="form-cracker"/>
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
                            className="form-cracker"/>
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
                            className="form-cracker"/>
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
                            name="ascensor"
                            className="form-cracker"/>
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
                            name="parking"
                            className="form-cracker"/>
                    ))}
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
                    {[
                        'Dat în exploatare', '2023', '2024', '2025', '2026', '2027+'
                    ].map((value, index) => (
                        <Form.Check
                            key={`exploitation-${index}`}
                            id={`exploitation-${index + 1}`}
                            type="checkbox"
                            label={value}
                            name="exploitation"
                            className="form-cracker"/>
                    ))}
                </Form.Group>
            </div>
        </>
    )
}

export default AddRequest
