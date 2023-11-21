import {useState} from 'react'
import {
    Form,
    InputGroup,
    ToggleButton,
    ToggleButtonGroup
} from 'react-bootstrap'
import {Formik} from 'formik'
import * as conf from '../config.ts'

// Media
import iconCheck from '../assets/media/icon_check_green_circle.svg'
import iconSelectMap from '../assets/media/icon_select_map.svg'
import iconStar from '../assets/media/icon_sulafat.svg'
import iconInvalid from '../assets/media/icon_invalid_red_circle.svg'
import iconNote from '../assets/media/icon_note_grey_circle.svg'
import iconSearch from '../assets/media/icon_search.svg'
import iconLocation from '../assets/media/icon_location_house.svg'

function FormAdd({isAddSalePage = false}) {
    const Star = () => isAddSalePage ? <img src={iconStar} alt=""/> : null
    const Feedback = ({dataName = ''}) => {
        return (
            isAddSalePage
                ? <span className="feedback" data-name={dataName}>Obligatoriu <img src={iconInvalid} alt=""/></span>
                : null
        )
    }
    const [count, setCount] = useState(254)

    return (
        // React Bootstrap + Formik example:
        // https://react-bootstrap.github.io/docs/forms/validation/#form-libraries-and-server-rendered-styles
        // https://formik.org/docs/tutorial#validation
        <Formik
            initialValues={{
                numberRooms: '',
                salePrice: '',
                area: '',
                location: '',
                photos: '',
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
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors
                }
            ) => (
                <Form
                    id={isAddSalePage ? 'add-sale-form' : 'add-request-form'}
                    className="form"
                    onSubmit={handleSubmit}
                    noValidate>

                    {/******************************************************
                     * Transaction Block
                     *******************************************************/}
                    <div className="card">
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
                    <div className="card">
                        <Form.Group controlId="housing-stock-1">
                            <Form.Label>Fond locativ</Form.Label>
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
                            <Form.Label>Număr de camere<Star/><Feedback dataName="numberRooms"/></Form.Label>
                            <div>
                                {[
                                    '1', '1.5', '2', '2.5', '3', '4.5', '4+'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`number-rooms-${index}`}
                                        id={`number-rooms-${index + 1}`}
                                        type={isAddSalePage ? 'radio' : 'checkbox'}
                                        label={value}
                                        value={value}
                                        name="numberRooms"
                                        inline
                                        onChange={handleChange}
                                        isInvalid={touched.numberRooms && !!errors.numberRooms}/>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="sale-price">
                            <Form.Label>Preț vânzare<Star/><Feedback dataName="salePrice"/></Form.Label>
                            {isAddSalePage
                                /*** Add Sale Page ***/
                                ? <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Indicați preț"
                                        name="salePrice"
                                        value={values.salePrice}
                                        onChange={handleChange}
                                        isInvalid={touched.salePrice && !!errors.salePrice}/>
                                    <InputGroup.Text>€</InputGroup.Text>
                                </InputGroup>

                                /*** Add Request Page ***/
                                : <div className="row">
                                    <div className="col">
                                        <Form.Control type="text" name="salePrice" placeholder="De la"/>
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
                            }
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

                        {isAddSalePage
                            /*** Add Sale Page ***/
                            ? <Form.Group controlId="mortgage-1">
                                <Form.Label>Credit ipotecar</Form.Label>
                                <div>
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
                                            inline/>
                                    ))}
                                </div>
                            </Form.Group>

                            /*** Add Request Page ***/
                            : null
                        }

                        <Form.Group controlId="area">
                            <Form.Label>Suprafață totală<Star/><Feedback dataName="area"/></Form.Label>
                            {isAddSalePage
                                /*** Add Sale Page ***/
                                ? <InputGroup>
                                    <Form.Control
                                        name="area"
                                        type="text"
                                        placeholder="Indicați suprafață"
                                        value={values.area}
                                        onChange={handleChange}
                                        isInvalid={touched.area && !!errors.area}/>
                                    <InputGroup.Text>m²</InputGroup.Text>
                                </InputGroup>

                                /*** Add Request Page ***/
                                : <div className="row">
                                    <div className="col">
                                        <Form.Control name="area" type="text" placeholder="De la"/>
                                    </div>
                                    <div className="col">
                                        <InputGroup>
                                            <Form.Control id="area-to" name="area" type="text" placeholder="Până la"/>
                                            <InputGroup.Text>m²</InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                </div>
                            }
                        </Form.Group>
                    </div>

                    {/******************************************************
                     * Location Block
                     *******************************************************/}
                    <div className="card">
                        {isAddSalePage
                            /*** Add Sale Page ***/
                            ? <>
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
                                    <img className="backdrop" src={`${conf.MEDIA}/thumb_map.png`} alt=""/>
                                    <img className="overlay" src={iconLocation} alt=""/>
                                </Form.Group>
                            </>

                            /*** Add Request Page ***/
                            : <>
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
                        }
                    </div>

                    {/******************************************************
                     * Photo Block
                     *******************************************************/}
                    {isAddSalePage
                        /*** Add Sale Page ***/
                        ? <div className="card">
                            <Form.Group controlId="photos">
                                <Form.Label>Fotografie<Star/>
                                    <Feedback dataName="photos"/>
                                    <span className="foot">5/{conf.MAX_PHOTOS}</span>
                                </Form.Label>
                                <div className="gallery-thumb">
                                    <div>
                                        <img src={`${conf.MEDIA}/plug_room_01.jpg`} alt=""/>
                                    </div>
                                    <div>
                                        <img src={`${conf.MEDIA}/plug_room_01.jpg`} alt=""/>
                                    </div>
                                    <div>
                                        <img src={`${conf.MEDIA}/plug_room_01.jpg`} alt=""/>
                                    </div>
                                    <div>
                                        <img src={`${conf.MEDIA}/plug_room_01.jpg`} alt=""/>
                                    </div>
                                    <div>
                                        <img src={`${conf.MEDIA}/plug_room_01.jpg`} alt=""/>
                                    </div>
                                </div>
                                <Form.Control
                                    type="file"
                                    name="photos"
                                    multiple
                                    onChange={handleChange}
                                    isInvalid={touched.photos && !!errors.photos}/>
                            </Form.Group>

                            <div className="alert alert-light">
                                <img src={iconNote} alt=""/>
                                <div>Primele 3 fotografii vor fi folosite pentru coperta anunțului.</div>
                            </div>
                        </div>

                        /*** Add Request Page ***/
                        : null
                    }

                    {/******************************************************
                     * Apartment Block
                     *******************************************************/}
                    <div className="card">
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
                                        type={isAddSalePage ? 'radio' : 'checkbox'}
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
                                        type={isAddSalePage ? 'radio' : 'checkbox'}
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
                    <div className="card">
                        <Form.Group controlId="levels">
                            <Form.Label>Nivel<Star/><Feedback dataName="levels"/></Form.Label>
                            {isAddSalePage
                                /*** Add Sale Page ***/
                                ? <Form.Select
                                    name="levels"
                                    onChange={handleChange}
                                    isInvalid={touched.levels && !!errors.levels}>
                                    <option>Selectați nivel</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </Form.Select>

                                /*** Add Request Page ***/
                                : <div className="row">
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
                            }
                        </Form.Group>

                        {!isAddSalePage
                            /*** Add Request Page ***/
                            ? <Form.Group>
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

                            /*** Add Sale Page ***/
                            : null
                        }

                        <Form.Group controlId="number-levels">
                            <Form.Label>Număr de nivele în casă<Star/>
                                <Feedback dataName="numberLevels"/>
                            </Form.Label>
                            {isAddSalePage
                                /*** Add Sale Page ***/
                                ? <Form.Select
                                    name="numberLevels"
                                    onChange={handleChange}
                                    isInvalid={touched.numberLevels && !!errors.numberLevels}>
                                    <option>Selectați număr de nivele</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </Form.Select>

                                /*** Add Request Page ***/
                                : <div className="row">
                                    <div className="col">
                                        <Form.Select>
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
                            }
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
                                        type={isAddSalePage ? 'radio' : 'checkbox'}
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
                                        type={isAddSalePage ? 'radio' : 'checkbox'}
                                        label={value}
                                        name="exploitation"
                                        inline/>
                                ))}
                            </div>
                        </Form.Group>

                        {isAddSalePage
                            /*** Add Sale Page ***/
                            ? <Form.Group controlId="description">
                                <Form.Label>
                                    Descriere
                                    <span className="foot">0/{conf.MAX_LETTER_DESCRIPTION}</span>
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Spuneți-ne despre proprietatea dumneavoastră. O descriere bine completată ajută la vânzarea mai rapidă a proprietății."
                                    rows={4}/>
                            </Form.Group>

                            /*** Add Request Page ***/
                            : null
                        }
                    </div>

                    {/******************************************************
                     * Fee Block
                     *******************************************************/}
                    {isAddSalePage
                        /*** Add Sale Page ***/
                        ? <div className="card">
                            <Form.Group controlId="transaction-fee-1">
                                <Form.Label>Comision de tranzacție</Form.Label>
                                <div>
                                    {[
                                        '0.5%', '1.5%', '1.5%', '2%', '2.5%', '3%', 'Alt'
                                    ].map((value, index) => (
                                        <Form.Check
                                            key={`transaction-fee-${index}`}
                                            id={`transaction-fee-${index + 1}`}
                                            label={value}
                                            name="transactionFee"
                                            type="radio"
                                            inline/>
                                    ))}
                                </div>
                            </Form.Group>

                            <div className="alert alert-light">
                                <img src={iconNote} alt=""/>
                                <div>
                                    Acest comision se referă la procentajul din suma totală
                                    a tranzacției pe care sunteți dispus să îl împărțiți cu afiliat.
                                </div>
                            </div>
                        </div>

                        /*** Add Request Page ***/
                        : null
                    }

                    {/******************************************************
                     * Button Block
                     *******************************************************/}
                    <div className="navbar">
                        <div className="container">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() => setCount((count) => count + 1)}>
                                {isAddSalePage
                                    /*** Add Sale Page ***/
                                    ? `Adaugă anunțe`

                                    /*** Add Request Page ***/
                                    : `Afișați ${count} de anunțuri`
                                }
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default FormAdd
