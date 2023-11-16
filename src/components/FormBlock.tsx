import {useState} from 'react'
import {useLocation} from 'react-router-dom'
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

// Media
import iconSelectMap from '../assets/media/icon_select_map.svg'
import iconStar from '../assets/media/icon_sulafat.svg'
import iconInvalid from "../assets/media/icon_invalid_red_circle.svg";
import iconNote from "../assets/media/icon_note_grey_circle.svg";

export function FormButton() {
    const [count, setCount] = useState(254)

    return (
        <Navbar fixed="bottom">
            <Container>
                <Button
                    /*type="submit"*/
                    variant="primary"
                    size="lg"
                    onClick={() => setCount((count) => count + 1)}>
                    Afișați {count} de anunțuri
                </Button>
            </Container>
        </Navbar>
    )
}

function getPathName() {
    const location = useLocation
    const path = location().pathname.split('/')
    return path[path.length - 1]
}

const isSale = () => getPathName() === 'add-sale'
const isRequest = () => getPathName() === 'add-request'
console.log(isSale, isRequest)

const Star = () => {
    return isSale() ? <Image src={iconStar}/> : null
}

interface MandatoryProps {
    hasError?: boolean
}

const Mandatory = ({hasError = false}: MandatoryProps) => {
    return (
        hasError
            ?
            isSale()
                ? <span className="mandatory">Mandatory <Image src={iconInvalid}/></span>
                : null
            : null
    )
}

export function BlockTransaction() {
    return (
        <Card>
            <Form.Group controlId="formGroup-1-1">
                <Form.Label>Tip tranzacție</Form.Label>
                <div>
                    <ToggleButtonGroup type="radio" name="options-1" defaultValue={1}>
                        <ToggleButton variant="outline-primary" id="tbg-radio-1-1" value={1}>
                            De vânzare
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-radio-1-2" value={2}>
                            De închiriat
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Form.Group>

            <Form.Group controlId="formGroup-1-2">
                <Form.Label>Tip de proprietate</Form.Label>
                <Form.Select aria-label="">
                    <option>Apartament</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
        </Card>
    )
}

export function BlockHousing() {
    return (
        <Card>
            <Form.Group controlId="formGroup-2-1">
                <Form.Label>Fond locativ</Form.Label>
                <div>
                    <ToggleButtonGroup type="radio" name="options-2" defaultValue={1}>
                        <ToggleButton variant="outline-primary" id="tbg-radio-2-1" value={1}>
                            Construcţii noi
                        </ToggleButton>
                        <ToggleButton variant="outline-primary" id="tbg-radio-2-2" value={2}>
                            Secundare
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Form.Group>

            <Form.Group controlId="formGroup-2-2">
                <Form.Label>Număr de camere<Star/><Mandatory hasError/></Form.Label>
                <div>
                    {['1', '1.5', '2', '2.5', '3', '4.5', '4+'].map((value) => (
                        <Form.Check key={`num-room-${value}`}
                                    inline
                                    label={value}
                                    name="group-2-2"
                                    type={isSale() ? "radio" : "checkbox"}
                                    id={`num-room-${value}`}/>
                    ))}
                </div>
            </Form.Group>

            <Form.Group controlId="formGroup-2-3">
                <Form.Label>Preț vânzare<Star/><Mandatory/></Form.Label>
                {
                    isSale()
                        ? <Form.Control type="text" placeholder="Indicați preț"/>
                        : (
                            <Row>
                                <Col>
                                    <Form.Control placeholder="De la"/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Până la"/> {/* TODO: add symbol*/}
                                </Col>
                            </Row>
                        )
                }
            </Form.Group>

            <Form.Group controlId="formGroup-2-4">
                <Form.Check
                    inline
                    label="Preț total"
                    name="group-2-4"
                    type="radio"
                    id="inline-radio-2-4-1"/>
                <Form.Check
                    inline
                    label="Preț m²"
                    name="group-2-4"
                    type="radio"
                    id="inline-radio-2-4-2"/>
            </Form.Group>

            {isSale() ?
                <Form.Group controlId="formGroup-2-6">
                    <Form.Label>Credit ipotecar</Form.Label>
                    <div>
                        <Form.Check
                            inline
                            label="Disponibil"
                            name="group-2-6"
                            type="radio"
                            id="inline-radio-2-6-1"/>
                        <Form.Check
                            inline
                            label="Indisponibil"
                            name="group-2-6"
                            type="radio"
                            id="inline-radio-2-6-2"/>
                    </div>
                </Form.Group> : null}

            <Form.Group controlId="formGroup-2-5">
                <Form.Label>Suprafață totală<Star/><Mandatory hasError/></Form.Label>
                {
                    isSale()
                        ? <Form.Control type="text" placeholder="Indicați suprafață"/>
                        : (
                            <Row>
                                <Col>
                                    <Form.Control placeholder="De la"/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Până la"/> {/* TODO: add symbol*/}
                                </Col>
                            </Row>
                        )
                }
            </Form.Group>
        </Card>
    )
}

export function BlockLocation() {
    return (
        <Card>
            <Form.Group controlId="formGroup-3-1">
                <Form.Label>Raion/oraș</Form.Label>
                <Form.Select aria-label="">
                    <option>Selectați o locație</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formGroup-3-2">
                <Form.Label>Zona pe hartă</Form.Label>
                <InputGroup>
                    <Form.Control placeholder="Selectați zona pe hartă" aria-label=""/>
                    <InputGroup.Text>
                        <img src={iconSelectMap} alt=""/>
                    </InputGroup.Text>
                </InputGroup>
            </Form.Group>
        </Card>
    )
}

export function BlockApartment() {
    return (
        <Card>
            <Form.Group controlId="formGroup-4-1">
                <Form.Label>Starea apartamentului</Form.Label>
                <div>
                    <Form.Check
                        inline
                        label="Varianta albă"
                        name="group-4-1"
                        type="checkbox"
                        id="inline-check-4-1-1"/>
                    <Form.Check
                        inline
                        label="Varianta sură"
                        name="group-4-1"
                        type="checkbox"
                        id="inline-check-4-1-2"/>
                    <Form.Check
                        inline
                        label="Reparație cosmetică"
                        name="group-4-1"
                        type="checkbox"
                        id="inline-check-4-1-3"/>
                    <Form.Check
                        inline
                        label="Euroreparație"
                        name="group-4-1"
                        type="checkbox"
                        id="inline-check-4-1-4"/>
                    <Form.Check
                        inline
                        label="Design individual"
                        name="group-4-1"
                        type="checkbox"
                        id="inline-check-4-1-5"/>
                </div>
            </Form.Group>

            <Form.Group controlId="formGroup-4-2">
                <Form.Label>Mobilier</Form.Label>
                <div>
                    <Form.Check
                        inline
                        label="Nemobilat"
                        name="group-4-2"
                        type="checkbox"
                        id="inline-check-4-2-1"/>
                    <Form.Check
                        inline
                        label="Parțial mobilat"
                        name="group-4-2"
                        type="checkbox"
                        id="inline-check-4-2-2"/>
                    <Form.Check
                        inline
                        label="Mobilat"
                        name="group-4-2"
                        type="checkbox"
                        id="inline-check-4-2-3"/>
                </div>
            </Form.Group>
        </Card>
    )
}

export function BlockLevel() {
    return (
        <Card>
            <Form.Group controlId="formGroup-5-1">
                <Form.Label>Nivel</Form.Label>
                <Row>
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
            </Form.Group>

            <Form.Group controlId="formGroup-5-2">
                <Form.Check
                    inline
                    label="Nu la parterul"
                    name="group-5-2"
                    type="checkbox"
                    id="inline-check-5-2-1"/>
                <Form.Check
                    inline
                    label="Nu la ultimul"
                    name="group-5-2"
                    type="checkbox"
                    id="inline-check-5-2-2"/>
                <Form.Check
                    inline
                    label="La ultimul"
                    name="group-5-2"
                    type="checkbox"
                    id="inline-check-5-2-3"/>
            </Form.Group>

            <Form.Group controlId="formGroup-5-3">
                <Form.Label>Număr de nivele în casă</Form.Label>
                <Row>
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
            </Form.Group>

            <Form.Group controlId="formGroup-5-4">
                <Form.Label>Dezvoltator</Form.Label>
                <Form.Select aria-label="">
                    <option>Selectați dezvoltator</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formGroup-5-5">
                <Form.Label>Parcare</Form.Label>
                <div>
                    <Form.Check
                        inline
                        label="Subterană"
                        name="group-5-5"
                        type="checkbox"
                        id="inline-check-5-5-1"/>
                    <Form.Check
                        inline
                        label="În curtea"
                        name="group-5-5"
                        type="checkbox"
                        id="inline-check-5-5-2"/>
                    <Form.Check
                        inline
                        label="Garaj"
                        name="group-5-5"
                        type="checkbox"
                        id="inline-check-5-5-3"/>
                </div>
            </Form.Group>

            <Form.Group controlId="formGroup-5-6">
                <Form.Label>Predare în expluatare</Form.Label>
                <div>
                    <Form.Check
                        inline
                        label="Dat în expluatare"
                        name="group-5-6"
                        type="checkbox"
                        id="inline-check-5-6-1"/>
                    <Form.Check
                        inline
                        label="2023"
                        name="group-5-6"
                        type="checkbox"
                        id="inline-check-5-6-2"/>
                    <Form.Check
                        inline
                        label="2024"
                        name="group-5-6"
                        type="checkbox"
                        id="inline-check-5-6-3"/>
                    <Form.Check
                        inline
                        label="2025"
                        name="group-5-6"
                        type="checkbox"
                        id="inline-check-5-6-4"/>
                    <Form.Check
                        inline
                        label="2026"
                        name="group-5-6"
                        type="checkbox"
                        id="inline-check-5-6-5"/>
                    <Form.Check
                        inline
                        label="2027+"
                        name="group-5-6"
                        type="checkbox"
                        id="inline-check-5-6-6"/>
                </div>
            </Form.Group>
        </Card>
    )
}

export function BlockFee() {
    return (
        <Card>
            <Form.Group controlId="formGroup-7-1">
                <Form.Label>Comision de tranzacție</Form.Label>
                <div>
                    {['0.5%', '1.5%', '1.5%', '2%', '2.5%', '3%', 'Alt'].map((value) => (
                        <Form.Check key={`fee-${value}`}
                                    inline
                                    label={value}
                                    name="group-7-1"
                                    type="radio"
                                    id={`fee-${value}`}/>
                    ))}
                </div>
            </Form.Group>

            <Alert variant="light">
                <Image src={iconNote}/>
                <div>Acest comision se referă la procentajul din suma totală a tranzacției pe care sunteți dispus să îl
                    împărțiți cu afiliatul.
                </div>
            </Alert>
        </Card>
    )
}
