import {
    Button,
    Card,
    Col,
    Container,
    Form,
    InputGroup,
    Navbar,
    Row,
    ToggleButton,
    ToggleButtonGroup
} from 'react-bootstrap'
import Header from '../containers/Header'
//import Footer from '../containers/Footer'
import Main from '../containers/Main'
import {useState} from 'react'

export const title: string = 'Home'

function Home() {
    const [count, setCount] = useState(254)

    return (
        <>
            <Header title={title}/>
            <Main>
                <h2>Cauta imobiliare</h2>

                <Form className="form">
                    {/* #1 */}
                    <Card>
                        <Form.Group className="mb-3" controlId="formGroup-1-1">
                            <Form.Label>Tip tranzactie</Form.Label>
                            <div>
                                <ToggleButtonGroup type="radio" name="options-1" defaultValue={1}>
                                    <ToggleButton variant="outline-primary" id="tbg-radio-1-1" value={1}>
                                        De vanzare
                                    </ToggleButton>
                                    <ToggleButton variant="outline-primary" id="tbg-radio-1-2" value={2}>
                                        De inchiriat
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            {/*<div>
                                <Form.Check
                                    inline
                                    label="De vanzare"
                                    name="group-1-1"
                                    type="radio"
                                    id="inline-radio-1-1-1"/>
                                <Form.Check
                                    inline
                                    label="De inchiriat"
                                    name="group-1-1"
                                    type="radio"
                                    id="inline-radio-1-1-2"/>
                            </div>*/}
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

                    {/* #2 */}
                    <Card>
                        <Form.Group className="mb-3" controlId="formGroup-2-1">
                            <Form.Label>Fond locativ</Form.Label>
                            <div>
                                <ToggleButtonGroup type="radio" name="options-2" defaultValue={1}>
                                    <ToggleButton variant="outline-primary" id="tbg-radio-2-1" value={1}>
                                        Constructii noi
                                    </ToggleButton>
                                    <ToggleButton variant="outline-primary" id="tbg-radio-2-2" value={2}>
                                        Secundare
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            {/*<div>
                                <Form.Check
                                    inline
                                    label="Constructii noi"
                                    name="group-2-1"
                                    type="radio"
                                    id="inline-radio-2-1-1"/>
                                <Form.Check
                                    inline
                                    label="Secundare"
                                    name="group-2-1"
                                    type="radio"
                                    id="inline-radio-2-1-2"/>
                            </div>*/}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroup-2-2">
                            <Form.Label>Numar de camere</Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    label="1"
                                    name="group-2-2"
                                    type="checkbox"
                                    id="inline-check-2-2-1"/>
                                <Form.Check
                                    inline
                                    label="1.5"
                                    name="group-2-2"
                                    type="checkbox"
                                    id="inline-check-2-2-2"/>
                                <Form.Check
                                    inline
                                    label="2"
                                    name="group-2-2"
                                    type="checkbox"
                                    id="inline-check-2-2-3"/>
                                <Form.Check
                                    inline
                                    label="2.5"
                                    name="group-2-2"
                                    type="checkbox"
                                    id="inline-check-2-2-4"/>
                                <Form.Check
                                    inline
                                    label="3"
                                    name="group-2-2"
                                    type="checkbox"
                                    id="inline-check-2-2-5"/>
                                <Form.Check
                                    inline
                                    label="3.5"
                                    name="group-2-2"
                                    type="checkbox"
                                    id="inline-check-2-2-6"/>
                                <Form.Check
                                    inline
                                    label="4+"
                                    name="group-2-2"
                                    type="checkbox"
                                    id="inline-check-2-2-7"/>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroup-2-3">
                            <Form.Label>Pret vanzare</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="De la"/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Pana la"/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroup-2-4">
                            <Form.Check
                                inline
                                label="Pret total"
                                name="group-2-4"
                                type="radio"
                                id="inline-radio-2-4-1"/>
                            <Form.Check
                                inline
                                label="Pret m²"
                                name="group-2-4"
                                type="radio"
                                id="inline-radio-2-4-2"/>
                        </Form.Group>
                        <Form.Group controlId="formGroup-2-5">
                            <Form.Label>Suprafata totala</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="De la"/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Pana la"/>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Card>

                    {/* #3 */}
                    <Card>
                        <Form.Group className="mb-3" controlId="formGroup-3-1">
                            <Form.Label>Raion/oras</Form.Label>
                            <Form.Select aria-label="">
                                <option>Selectati o locatie</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formGroup-3-2">
                            <Form.Label>Zona pe harta</Form.Label>
                            <InputGroup>
                                <Form.Control placeholder="Selectati zona ре harta" aria-label=""/>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                    </Card>

                    {/* #4 */}
                    <Card>
                        <Form.Group className="mb-3" controlId="formGroup-4-1">
                            <Form.Label>Starea apartamentului</Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    label="Varianta alba"
                                    name="group-4-1"
                                    type="checkbox"
                                    id="inline-check-4-1-1"/>
                                <Form.Check
                                    inline
                                    label="Varianta sura"
                                    name="group-4-1"
                                    type="checkbox"
                                    id="inline-check-4-1-2"/>
                                <Form.Check
                                    inline
                                    label="Reparatie cosmetics"
                                    name="group-4-1"
                                    type="checkbox"
                                    id="inline-check-4-1-3"/>
                                <Form.Check
                                    inline
                                    label="Euroreparatie"
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
                                    label="Partial mobilat"
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

                    {/* #5 */}
                    <Card>
                        <Form.Group className="mb-3" controlId="formGroup-5-1">
                            <Form.Label>Nivel</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Select>
                                        <option>De la</option>
                                        <option>One</option>
                                        <option>Two</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select>
                                        <option>Раnа la</option>
                                        <option>One</option>
                                        <option>Two</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroup-5-2">
                            <Form.Check
                                inline
                                label="Subterana"
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
                        <Form.Group className="mb-3" controlId="formGroup-5-3">
                            <Form.Label>Numar de nivele in casa</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Select>
                                        <option>De la</option>
                                        <option>One</option>
                                        <option>Two</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select>
                                        <option>Раnа la</option>
                                        <option>One</option>
                                        <option>Two</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroup-5-4">
                            <Form.Label>Dezvoltator</Form.Label>
                            <Form.Select aria-label="">
                                <option>Selectati dezvoltator</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroup-5-5">
                            <Form.Label>Parcare</Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    label="Subterana"
                                    name="group-5-5"
                                    type="checkbox"
                                    id="inline-check-5-5-1"/>
                                <Form.Check
                                    inline
                                    label="Deschis"
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
                            <Form.Label>Predare in expluatare</Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    label="Dat in expluatare"
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

                    <Navbar fixed="bottom">
                        <Container>
                            <Button
                                /*type="submit"*/
                                variant="primary"
                                size="lg"
                                onClick={() => setCount((count) => count + 1)}>
                                Afisati {count} de anunturi
                            </Button>
                        </Container>
                    </Navbar>
                </Form>
            </Main>
            {/*<Footer/>*/}
        </>
    )
}

export default Home
