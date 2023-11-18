import {useState} from 'react'
import { useLocation } from 'react-router-dom'
import {
    Alert,
    Button,
    Card,
    Col,
    Container,
    Form,
    Image,
    InputGroup,
    Navbar,
    Row,
    ToggleButton,
    ToggleButtonGroup
} from 'react-bootstrap'
import {Formik} from 'formik'
import * as yup from 'yup'
import * as conf from '../config.ts'

// Media
import imageHousing from '../assets/media/plug_room_01.jpg'
import thumbMap from '../assets/media/thumb_map.png'
import iconCheck from '../assets/media/icon_check_green_circle.svg'
import iconSelectMap from '../assets/media/icon_select_map.svg'
import iconStar from '../assets/media/icon_sulafat.svg'
import iconInvalid from '../assets/media/icon_invalid_red_circle.svg'
import iconNote from '../assets/media/icon_note_grey_circle.svg'
import iconSearch from '../assets/media/icon_search.svg'
//import iconLocation from '../assets/media/icon_location_house.svg'

function getPathName() {
    const location = useLocation
    const path = location().pathname.split('/')
    return path[path.length - 1]
}

const isAddSalePage = () => getPathName() === 'add-sale'
const isAddRequestPage = () => getPathName() === 'add-request'

interface MandatoryProps {
    hasError?: boolean
}

function Mandatory({ hasError = false }: MandatoryProps) {
    return (
        hasError
            ? isAddSalePage()
                /*** Add Sale Page ***/
                ? <span className="mandatory">Obligatoriu <Image src={iconInvalid} /></span>

                /*** Add Request Page ***/
                : null
            : null
    )
}

function Star() {
    return (
        isAddSalePage()
            /*** Add Sale Page ***/
            ? <Image src={iconStar} />

            /*** Add Request Page ***/
            : null
    )
}

export function FormButton() {
    const [count, setCount] = useState(254)

    return (
        <Navbar fixed="bottom">
            <Container>
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    onClick={() => setCount((count) => count + 1)}>
                    {isAddSalePage()
                        /*** Add Sale Page ***/
                        ? `Adaugă anunțe`

                        /*** Add Request Page ***/
                        : `Afișați ${count} de anunțuri`
                    }
                </Button>
            </Container>
        </Navbar>
    )
}

function FormAdd() {
    //const {Formik} = formik

    const schema = yup.object().shape(
        {
            sale_price: yup.string().required(),
            number_of_rooms: yup.string().required(),
            //number_of_rooms: yup.bool().required().oneOf([true], 'Terms must be accepted')
        });

    const hasError = false
    const countPhoto = 5

    return (
        // React Bootstrap + Formik example:
        // https://react-bootstrap.github.io/docs/forms/validation/#form-libraries-and-server-rendered-styles
        <Formik
            validationSchema={schema}
            initialValues={{
                number_of_rooms: false,
                sale_price: ''
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500))
                alert(JSON.stringify(values, null, 2))
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
                <Form className="form" noValidate onSubmit={handleSubmit}>

                    {/******************************************************
                     * Transaction Block
                     *******************************************************/}
                    <Card>
                        <Form.Group controlId="transaction_type_1">
                            <Form.Label>Tip tranzacție</Form.Label>
                            <div>
                                <ToggleButtonGroup type="radio" name="transaction_type" defaultValue={1}>
                                    <ToggleButton variant="outline-primary" id="transaction_type_1" value={1}>
                                        De vânzare
                                    </ToggleButton>
                                    <ToggleButton variant="outline-primary" id="transaction_type_2" value={2}>
                                        De închiriat
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="property_type">
                            <Form.Label>Tip de proprietate</Form.Label>
                            <Form.Select>
                                <option>Apartament</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </Form.Select>
                        </Form.Group>
                    </Card>

                    {/******************************************************
                     * Housing Block
                     *******************************************************/}
                    <Card>
                        <Form.Group controlId="housing_stock_1">
                            <Form.Label>Fond locativ</Form.Label>
                            <div>
                                <ToggleButtonGroup type="radio" name="housing_stock" defaultValue={1}>
                                    <ToggleButton variant="outline-primary" id="housing_stock_1" value={1}>
                                        Construcții noi
                                    </ToggleButton>
                                    <ToggleButton variant="outline-primary" id="housing_stock_2" value={2}>
                                        Secundare
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </Form.Group>

                        <Form.Group controlId="number_of_rooms_1">
                            <Form.Label>Număr de camere<Star/><Mandatory hasError/></Form.Label>
                            <div>
                                {[
                                    '1',
                                    '1.5',
                                    '2',
                                    '2.5',
                                    '3',
                                    '4.5',
                                    '4+'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`number_of_rooms_${index}`}
                                        //id={`${isAddSalePage() ? "radio" : "checkbox"}_number_of_rooms_${index + 1}`}
                                        id={`number_of_rooms_${index + 1}`}
                                        type={isAddSalePage() ? "radio" : "checkbox"}
                                        label={value}
                                        value={value}
                                        name="number_of_rooms"
                                        inline
                                        onChange={handleChange}
                                        isInvalid={!!errors.number_of_rooms}
                                        /*feedback={errors.number_of_rooms}
                                        feedbackType="invalid"*//>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="sale_price">
                            <Form.Label>Preț vânzare<Star/><Mandatory/></Form.Label>
                            {isAddSalePage()
                                /*** Add Sale Page ***/
                                ? <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Indicați preț"
                                        name="sale_price"
                                        value={values.sale_price}
                                        onChange={handleChange}
                                        isInvalid={touched.number_of_rooms && !!errors.sale_price}/>
                                    <InputGroup.Text>€</InputGroup.Text>
                                </InputGroup>

                                /*** Add Request Page ***/
                                : <Row>
                                    <Col>
                                        <Form.Control id="sale_price" type="text" placeholder="De la"/>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <Form.Control id="sale_price_to" type="text" placeholder="Până la"/>
                                            <InputGroup.Text>€</InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            }
                        </Form.Group>

                        <Form.Group>
                            {[
                                'Preț total',
                                'Preț m²'
                            ].map((value, index) => (
                                <Form.Check
                                    key={`price_type_${index}`}
                                    id={`price_type_${index + 1}`}
                                    type="radio"
                                    label={value}
                                    value={value}
                                    name="price_type"
                                    inline/>
                            ))}
                        </Form.Group>

                        {isAddSalePage()
                            /*** Add Sale Page ***/
                            ? <Form.Group controlId="mortgage_1">
                                <Form.Label>Credit ipotecar</Form.Label>
                                <div>
                                    {[
                                        'Disponibil',
                                        'Indisponibil'
                                    ].map((value, index) => (
                                        <Form.Check
                                            key={`mortgage_${index}`}
                                            id={`mortgage_${index + 1}`}
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

                        <Form.Group controlId="formGroup-2-5">
                            <Form.Label>Suprafață totală<Star/><Mandatory hasError/></Form.Label>
                            {isAddSalePage()
                                /*** Add Sale Page ***/
                                ? <InputGroup>
                                    <Form.Control type="text" placeholder="Indicați suprafață"/>
                                    <InputGroup.Text>m²</InputGroup.Text>
                                </InputGroup>

                                /*** Add Request Page ***/
                                : <Row>
                                    <Col>
                                        <Form.Control type="text" placeholder="De la"/>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <Form.Control type="text" placeholder="Până la"/>
                                            <InputGroup.Text>m²</InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            }
                        </Form.Group>
                    </Card>

                    {/******************************************************
                     * Location Block
                     *******************************************************/}
                    <Card>
                        {isAddSalePage()
                            /*** Add Sale Page ***/
                            ? <>
                                <Form.Group controlId="formGroup-3-1">
                                    <Form.Label>Locație<Star/><Mandatory/></Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <Image src={iconSearch}/>
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="text"
                                            value="Chișinău, Botanica, Dacia 11/1"
                                            placeholder="Orașul, strada, numărul casei"/>
                                        <InputGroup.Text>
                                            <Image src={iconCheck}/>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group controlId="formGroup-3-2">
                                    <Image className="border" src={thumbMap} rounded fluid/>
                                    {/*TODO: <Image src={iconLocation}/>*/}
                                </Form.Group>
                            </>

                            /*** Add Request Page ***/
                            : <>
                                <Form.Group controlId="formGroup-3-1">
                                    <Form.Label>Raion/oraș</Form.Label>
                                    <Form.Select>
                                        <option>Selectați o locație</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="formGroup-3-2">
                                    <Form.Label>Zona pe hartă</Form.Label>
                                    <InputGroup>
                                        <Form.Control type="text" placeholder="Selectați zona pe hartă"/>
                                        <InputGroup.Text>
                                            <Image src={iconSelectMap}/>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                            </>
                        }
                    </Card>

                    {/******************************************************
                     * Photo Block
                     *******************************************************/}
                    {isAddSalePage()
                        ? <Card>
                            <Form.Group controlId="formGroup-7-1">
                                <Form.Label>Fotografie<Star/>
                                    {
                                        hasError
                                            ? <Mandatory hasError={hasError}/>
                                            : <span className="foot">{countPhoto}/{conf.MAX_PHOTOS}</span>
                                    }
                                </Form.Label>
                                <Row className="row-cols-3 mb-1">
                                    <Col className="mb-2"><Image src={imageHousing} rounded fluid/></Col>
                                    <Col className="mb-2"><Image src={imageHousing} rounded fluid/></Col>
                                    <Col className="mb-2"><Image src={imageHousing} rounded fluid/></Col>
                                    <Col className="mb-2"><Image src={imageHousing} rounded fluid/></Col>
                                    <Col className="mb-2"><Image src={imageHousing} rounded fluid/></Col>
                                </Row>
                                <Form.Control type="file" multiple/>
                            </Form.Group>

                            <Alert variant="light">
                                <Image src={iconNote}/>
                                <div>Primele 3 fotografii vor fi folosite pentru coperta anunțului.</div>
                            </Alert>
                        </Card>
                        : null
                    }

                    {/******************************************************
                     * Apartment Block
                     *******************************************************/}
                    <Card>
                        <Form.Group controlId="formGroup-4-1">
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
                                        key={`status-${index}`}
                                        inline
                                        label={value}
                                        name="group-4-1"
                                        type={isAddSalePage() ? "radio" : "checkbox"}
                                        id={`status-${index}`}/>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formGroup-4-2">
                            <Form.Label>Mobilier</Form.Label>
                            <div>
                                {[
                                    'Nemobilat',
                                    'Parțial mobilat',
                                    'Mobilat'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`furniture-${index}`}
                                        inline
                                        label={value}
                                        name="group-4-2"
                                        type={isAddSalePage() ? "radio" : "checkbox"}
                                        id={`furniture-${index}`}/>
                                ))}
                            </div>
                        </Form.Group>
                    </Card>

                    {/******************************************************
                     * Level Block
                     *******************************************************/}
                    <Card>
                        <Form.Group controlId="formGroup-5-1">
                            <Form.Label>Nivel<Star/><Mandatory/></Form.Label>
                            {isAddSalePage()
                                /*** Add Sale Page ***/
                                ? <Form.Select>
                                    <option>Selectați nivel</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </Form.Select>

                                /*** Add Request Page ***/
                                : <Row>
                                    <Col>
                                        <Form.Select>
                                            <option>De la</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select>
                                            <option>Până la</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            }
                        </Form.Group>

                        {isAddRequestPage()
                            /*** Add Request Page ***/
                            ? <Form.Group controlId="formGroup-5-2">
                                {[
                                    'Nu la parterul',
                                    'Nu la ultimul',
                                    'La ultimul'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`option-${index}`}
                                        inline
                                        label={value}
                                        name="group-5-5"
                                        type="checkbox"
                                        id={`option-${index}`}/>
                                ))}
                            </Form.Group>

                            /*** Add Sale Page ***/
                            : null
                        }

                        <Form.Group controlId="formGroup-5-3">
                            <Form.Label>Număr de nivele în casă<Star/><Mandatory hasError/></Form.Label>
                            {isAddSalePage()
                                /*** Add Sale Page ***/
                                ? <Form.Select>
                                    <option>Selectați număr de nivele</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </Form.Select>

                                /*** Add Request Page ***/
                                : <Row>
                                    <Col>
                                        <Form.Select>
                                            <option>De la</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                        </Form.Select>
                                    </Col>
                                    <Col>
                                        <Form.Select>
                                            <option>Până la</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            }
                        </Form.Group>

                        <Form.Group controlId="formGroup-5-5">
                            <Form.Label>Ascensor</Form.Label>
                            <div>
                                {[
                                    'Este',
                                    'Absent'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`ascensor-${index}`}
                                        inline
                                        label={value}
                                        name="group-5-5"
                                        type={isAddSalePage() ? "radio" : "checkbox"}
                                        id={`ascensor-${index}`}/>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formGroup-5-5">
                            <Form.Label>Parcare</Form.Label>
                            <div>
                                {[
                                    'Subterană',
                                    'În curtea',
                                    'Garaj'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`parking-${index}`}
                                        inline
                                        label={value}
                                        name="group-5-5"
                                        type="checkbox"
                                        id={`parking-${index}`}/>
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="formGroup-5-4">
                            <Form.Label>Dezvoltator</Form.Label>
                            <Form.Select>
                                <option>Selectați dezvoltator</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formGroup-5-6">
                            <Form.Label>Predare în exploatare</Form.Label>
                            <div>
                                {[
                                    'Dat în exploatare',
                                    '2023',
                                    '2024',
                                    '2025',
                                    '2026',
                                    '2027+'
                                ].map((value, index) => (
                                    <Form.Check
                                        key={`date-${index}`}
                                        inline
                                        label={value}
                                        name="group-5-6"
                                        type={isAddSalePage() ? "radio" : "checkbox"}
                                        id={`date-${index}`}/>
                                ))}
                            </div>
                        </Form.Group>

                        {isAddSalePage()
                            /*** Add Sale Page ***/
                            ? <Form.Group controlId="formGroup-5-7">
                                <Form.Label>Descriere<span
                                    className="foot">0/{conf.MAX_LETTER_DESCRIPTION}</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Spuneți-ne despre proprietatea dumneavoastră. O descriere bine completată ajută la vânzarea mai rapidă a proprietății."
                                    rows={4}/>
                            </Form.Group>

                            /*** Add Request Page ***/
                            : null
                        }
                    </Card>

                    {/******************************************************
                     * Fee Block
                     *******************************************************/}
                    {isAddSalePage()
                        ? <Card>
                                <Form.Group controlId="formGroup-7-1">
                                    <Form.Label>Comision de tranzacție</Form.Label>
                                    <div>
                                        {[
                                            '0.5%',
                                            '1.5%',
                                            '1.5%',
                                            '2%',
                                            '2.5%',
                                            '3%',
                                            'Alt'
                                        ].map((value, index) => (
                                            <Form.Check
                                                key={`fee-${index}`}
                                                inline
                                                label={value}
                                                name="group-7-1"
                                                type="radio"
                                                id={`fee-${index}`}/>
                                        ))}
                                    </div>
                                </Form.Group>

                                <Alert variant="light">
                                    <Image src={iconNote}/>
                                    <div>
                                        Acest comision se referă la procentajul din suma totală
                                        a tranzacției pe care sunteți dispus să îl împărțiți cu afiliat.
                                    </div>
                                </Alert>
                            </Card>
                        : null
                    }

                    <FormButton/>
                </Form>
            )}
        </Formik>
    )
}

export default FormAdd
