import {Form, InputGroup} from 'react-bootstrap'
import {Formik} from 'formik'
import Header from '../containers/Header'
import Main from '../containers/Main'
import * as conf from '../config.ts'
import {createProperty, formData} from '../api'
import {FormEvent} from 'react'

// Media
import iconCheck from '../media/icon_check_green_circle.svg'
import iconStar from '../media/icon_sulafat.svg'
import iconInvalid from '../media/icon_invalid_red_circle.svg'
import iconNote from '../media/icon_note_grey_circle.svg'
import iconSearch from '../media/icon_search.svg'
import iconLocation from '../media/icon_location_house.svg'
import iconAddPhoto from '../media/icon_add_photo.svg'

const title: string = 'Add Sale'

function Star() {
    return <img src={iconStar} alt=""/>
}

function Feedback({dataName = ''}) {
    return (
        <span
            className="feedback"
            data-name={dataName}>
            Obligatoriu <img src={iconInvalid} alt=""/>
        </span>
    )
}

function AddSale() {
    const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const result = await createProperty(formData(event.currentTarget))
        console.log('formSubmitHandler', result);
    }

    return (
        <>
            <Header title={title}/>
            <Main>
                <h2>Adaugă imobiliare</h2>

                <Formik
                    initialValues={{
                        numberRooms: '',
                        salePrice: '',
                        area: '',
                        location: '',
                        addPhoto: '',
                        levels: '',
                        numberLevels: ''
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 100))
                        alert(JSON.stringify(values, null, 2))

                        for (const [key, value] of Object.entries(values)) {
                            if (value === '') {
                                document.querySelector(`[data-name=${key}]`)!.classList.add('show')
                            }
                        }
                    }}>
                    {(
                        {
                            handleChange,
                            values,
                            touched,
                            errors
                        }
                    ) => (
                        <Form
                            id="add-sale-form"
                            className="app-form"
                            onSubmit={formSubmitHandler}
                            noValidate>

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
                                    <Form.Label>Număr de camere<Star/><Feedback dataName="numberRooms"/></Form.Label>
                                    {[
                                        '1', '1.5', '2', '2.5', '3', '4.5', '4+'
                                    ].map((value, index) => (
                                        <Form.Check
                                            key={`number-rooms-${index}`}
                                            id={`number-rooms-${index + 1}`}
                                            type="radio"
                                            label={value}
                                            value={value}
                                            name="numberRooms"
                                            className="form-cracker"
                                            onChange={handleChange}
                                            isInvalid={touched.numberRooms && !!errors.numberRooms}
                                        />
                                    ))}
                                </Form.Group>

                                <Form.Group controlId="sale-price">
                                    <Form.Label>Preț vânzare<Star/><Feedback dataName="salePrice"/></Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Indicați preț"
                                            name="salePrice"
                                            value={values.salePrice}
                                            onChange={handleChange}
                                            isInvalid={touched.salePrice && !!errors.salePrice}
                                        />
                                        <InputGroup.Text>€</InputGroup.Text>
                                    </InputGroup>
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
                                            inline
                                        />
                                    ))}
                                </Form.Group>

                                <Form.Group controlId="mortgage-1">
                                    <Form.Label>Credit ipotecar</Form.Label>
                                    {[
                                        'Disponibil',
                                        'Indisponibil'
                                    ].map((value, index) => (
                                        <Form.Check
                                            key={`mortgage-${index}`}
                                            id={`mortgage-${index + 1}`}
                                            type="radio"
                                            label={value}
                                            value={value}
                                            name="mortgage"
                                            className="form-cracker"
                                        />
                                    ))}
                                </Form.Group>

                                <Form.Group controlId="area">
                                    <Form.Label>Suprafață totală<Star/><Feedback dataName="area"/></Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            name="area"
                                            type="text"
                                            placeholder="Indicați suprafață"
                                            value={values.area}
                                            onChange={handleChange}
                                            isInvalid={touched.area && !!errors.area}
                                        />
                                        <InputGroup.Text>m²</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </div>

                            {/******************************************************
                             * Location Block
                             *******************************************************/}
                            <div className="app-card">
                                <Form.Group controlId="location">
                                    <Form.Label>Locație<Star/><Feedback dataName="location"/></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <img src={iconSearch} alt=""/>
                                        </InputGroup.Text>
                                        <Form.Control
                                            name="location"
                                            type="text"
                                            value={values.location}
                                            placeholder="Orașul, strada, numărul casei"
                                            onChange={handleChange}
                                            isInvalid={touched.location && !!errors.location}/>
                                        <InputGroup.Text>
                                            <img src={iconCheck} alt=""/>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group className="map-thumb">
                                    <img className="map-preview" src={`${conf.MEDIA_URL}/thumb_map.png`} alt=""/>
                                    <img className="map-overlay" src={iconLocation} alt=""/>
                                </Form.Group>
                            </div>

                            {/******************************************************
                             * Photo Block
                             *******************************************************/}
                            <div className="app-card">
                                <Form.Group controlId="add-photo">
                                    <Form.Label>Fotografie<Star/>
                                        <Feedback dataName="addPhoto"/>
                                        <span className="foot">5/{conf.MAX_PHOTOS}</span>
                                    </Form.Label>
                                    <div className="gallery-thumb">
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                        <div>
                                            <img src={`${conf.MEDIA_URL}/plug_room_01.jpg`} alt=""/>
                                        </div>
                                    </div>
                                    <Form.Control
                                        type="file"
                                        name="addPhoto"
                                        className="form-add-photo"
                                        multiple
                                        onChange={handleChange}
                                        isInvalid={touched.addPhoto && !!errors.addPhoto}
                                    />
                                    <Form.Label><img src={iconAddPhoto} alt=""/>Adaugă fotografie</Form.Label>
                                </Form.Group>

                                <div className="alert alert-light">
                                    <img src={iconNote} alt=""/>
                                    <div>Primele 3 fotografii vor fi folosite pentru coperta anunțului.</div>
                                </div>
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
                                            type="radio"
                                            label={value}
                                            name="apartmentStatus"
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
                                            type="radio"
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
                            <div className="app-card">
                                <Form.Group controlId="levels">
                                    <Form.Label>Nivel<Star/><Feedback dataName="levels"/></Form.Label>
                                    <Form.Select
                                        name="levels"
                                        onChange={handleChange}
                                        isInvalid={touched.levels && !!errors.levels}>
                                        <option>Selectați nivel</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="number-levels">
                                    <Form.Label>Număr de nivele în casă<Star/>
                                        <Feedback dataName="numberLevels"/>
                                    </Form.Label>
                                    <Form.Select
                                        name="numberLevels"
                                        onChange={handleChange}
                                        isInvalid={touched.numberLevels && !!errors.numberLevels}>
                                        <option>Selectați număr de nivele</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                    </Form.Select>
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
                                            type="radio"
                                            label={value}
                                            name="ascensor"
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
                                            name="parking"
                                            className="form-cracker"
                                        />
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
                                            type="radio"
                                            label={value}
                                            name="exploitation"
                                            className="form-cracker"
                                        />
                                    ))}
                                </Form.Group>

                                <Form.Group controlId="description">
                                    <Form.Label>
                                        Descriere
                                        <span className="foot">0/{conf.MAX_LETTER_DESCRIPTION}</span>
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Spuneți-ne despre proprietatea dumneavoastră. O descriere bine completată ajută la vânzarea mai rapidă a proprietății."
                                        rows={4}
                                    />
                                </Form.Group>
                            </div>

                            {/******************************************************
                             * Fee Block
                             *******************************************************/}
                            <div className="app-card">
                                <Form.Group controlId="transaction-fee-1">
                                    <Form.Label>Comision de tranzacție</Form.Label>
                                    {[
                                        '0.5%', '1.5%', '1.5%', '2%', '2.5%', '3%', 'Alt'
                                    ].map((value, index) => (
                                        <Form.Check
                                            key={`transaction-fee-${index}`}
                                            id={`transaction-fee-${index + 1}`}
                                            label={value}
                                            name="transactionFee"
                                            type="radio"
                                            className="form-cracker"
                                        />
                                    ))}
                                </Form.Group>

                                <div className="alert alert-light">
                                    <img src={iconNote} alt=""/>
                                    <div>
                                        Acest comision se referă la procentajul din suma totală
                                        a tranzacției pe care sunteți dispus să îl împărțiți cu afiliat.
                                    </div>
                                </div>
                            </div>

                            <div className="navbar">
                                <div className="app-container">
                                    <button
                                        type="submit"
                                        className="btn btn-primary">
                                        Adaugă anunțe
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Main>
        </>
    )
}

export default AddSale
