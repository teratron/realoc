import {Accordion, Form, InputGroup} from 'react-bootstrap'

// Media
import iconSearch from '../media/icon_search.svg'

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
                        className="search-control"
                    />
                </InputGroup>
            </Form.Group>

            <div className="app-card">
                <h3>Localități populare</h3>

                {/*** Level #1 ***/}
                <Accordion flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Button as="div" className="partially">Chișinău mun.<small>34
                            localități</small></Accordion.Button>
                        <Accordion.Body>

                            {/*** Level #2 ***/}
                            <Accordion>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Button as="div" className="">Chișinău<small>10
                                        sectoare</small></Accordion.Button>
                                    <Accordion.Body>

                                        {/*** Level #3 ***/}
                                        {[
                                            'Aeroport',
                                            'Botanica',
                                            'Buiucani'
                                        ].map((value, index) => (
                                            <Form.Check
                                                key={`popular-localities-1-${index}`}
                                                id={`popular-localities-1-${index + 1}`}
                                                type="checkbox"
                                                label={value}
                                                name="popularLocalities"
                                                className="custom-checkbox"
                                            />
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            {/*** Level #2 ***/}
                            {[
                                'Bacioi',
                                'Bubuieci'
                            ].map((value, index) => (
                                <Form.Check
                                    key={`popular-localities-2-${index}`}
                                    id={`popular-localities-2-${index + 1}`}
                                    type="checkbox"
                                    label={value}
                                    name="popularLocalities"
                                    className="custom-checkbox"
                                />
                            ))}

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/*** Level #1 ***/}
                <Accordion flush>
                    <Accordion.Item eventKey="2">
                        <Accordion.Button as="div" className="fully">Bălți mun.<small>3
                            localități</small></Accordion.Button>
                        <Accordion.Body>

                            {/*** Level #2 ***/}
                            <Accordion>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Button as="div" className="">Bălți<small>17
                                        sectoare</small></Accordion.Button>
                                    <Accordion.Body>

                                        {/*** Level #3 ***/}
                                        {[
                                            'Botanica',
                                            'Buiucani'
                                        ].map((value, index) => (
                                            <Form.Check
                                                key={`popular-localities-3-${index}`}
                                                id={`popular-localities-3-${index + 1}`}
                                                type="checkbox"
                                                label={value}
                                                name="popularLocalities"
                                                className="custom-checkbox"
                                            />
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            {/*** Level #2 ***/}
                            {[
                                'Elizaveta',
                                'Sadovoe'
                            ].map((value, index) => (
                                <Form.Check
                                    key={`popular-localities-4-${index}`}
                                    id={`popular-localities-4-${index + 1}`}
                                    type="checkbox"
                                    label={value}
                                    name="popularLocalities"
                                    className="custom-checkbox"
                                />
                            ))}

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className="app-card">
                <h3 className="alphabet">A</h3>

                {/*** Level #1 ***/}
                <Accordion flush>
                    <Accordion.Item eventKey="5">
                        <Accordion.Button as="div">Anenii Noi<small>45 localități</small></Accordion.Button>
                        <Accordion.Body>

                            {[
                                'Bacioi',
                                'Bubuieci'
                            ].map((value, index) => (
                                <Form.Check
                                    key={`popular-localities-5-${index}`}
                                    id={`popular-localities-5-${index + 1}`}
                                    type="checkbox"
                                    label={value}
                                    name="popularLocalities"
                                    className="custom-checkbox"
                                />
                            ))}

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <div className="app-pane">
                <h3>Nisporeni</h3>
                <Form.Check
                    key="popular-localities-6-0"
                    id="popular-localities-6-1"
                    type="checkbox"
                    label="Chilișoaia"
                    name="popularLocalities"
                    className="custom-checkbox"
                />
                <h3>Regiune</h3>
                <Accordion flush>
                    <Accordion.Item eventKey="7">
                        <Accordion.Button as="div">Chișinău mun.<small>34 localități</small></Accordion.Button>
                        <Accordion.Body>

                            {[
                                'Bacioi',
                                'Bubuieci'
                            ].map((value, index) => (
                                <Form.Check
                                    key={`popular-localities-7-${index}`}
                                    id={`popular-localities-7-${index + 1}`}
                                    type="checkbox"
                                    label={value}
                                    name="popularLocalities"
                                    className="custom-checkbox"
                                />
                            ))}

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default SelectLocation
