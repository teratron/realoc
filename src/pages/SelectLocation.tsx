import {Accordion, Form, InputGroup} from 'react-bootstrap'

// Media Popular localities
import iconSearch      from '../media/icon_search.svg'
import iconChevronDown from '../media/icon_chevron_down.svg'

function SelectLocation() {
    return (
        <>
            <Form.Group controlId="location">
                <InputGroup>
                    <InputGroup.Text>
                        <img src={iconSearch} alt=""/>
                    </InputGroup.Text>
                    <Form.Control
                        name="selectLocation"
                        type="text"
                        value=""
                        placeholder="Municipiu, raion, oraș, sector"
                    />
                </InputGroup>
            </Form.Group>

            <div className="app-card">
                <Form.Group>
                    {/*<Form.Label htmlFor="popular-localities">Localități populare</Form.Label>*/}
                    <Accordion flush>
                        {[
                            'Chișinău mun.',
                            'Bălți mun.'
                        ].map((value, index) => (
                            <Accordion.Item
                                eventKey={`level-${index}`}
                                key={`level-${index}`}
                            >
                                <Accordion.Button as="div">
                                    {value}
                                    <img src={iconChevronDown} alt=""/>
                                </Accordion.Button>
                                {/*<Form.Check
                                        key={`popular-localities-${index}`}
                                        id={`popular-localities-${index + 1}`}
                                        type="checkbox"
                                        label={value}
                                        name="popularLocalities"
                                        className=""
                                    />*/}

                                <Accordion.Body>
                                    {value}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                        {/*<Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>*/}
                    </Accordion>
                </Form.Group>
            </div>
        </>
    )
}

export default SelectLocation
