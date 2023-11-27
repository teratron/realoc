import {Accordion, Form, InputGroup} from 'react-bootstrap'

// Media Popular localities
import iconSearch from '../media/icon_search.svg'

//import iconChevronDown from '../media/icon_chevron_down.svg'

//type ListLocation = (string | (string | string[])[])[]

function SelectLocation() {
    const location = [
        ['Chișinău mun.',
            ['Chișinău',
                [
                    'Aeroport',
                    'Botanica',
                    'Buiucani'
                ]
            ],
            ['Bacioi',
                [
                    'Aeroport',
                    'Botanica',
                    'Buiucani'
                ]
            ]
        ],
        ['Bălți mun.',
            ['Bubuieci',
                [
                    'Aeroport',
                    'Botanica',
                    'Buiucani'
                ]
            ]
        ],
        ['Cahul mun.']
    ]

    /*function iter(array: [...ListLocation[]]) {
        for (const element of array) {
            console.log(element.length)
            if (element.length > 1 && (typeof element[1] === Array)) {
                console.log(element[0])
                console.log('\t', element[1])
                //iter(element[1] as ListLocation[])
            }
        }
    }

    iter(location)*/

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
                    {/*** Level #1 ***/}
                    <Accordion flush>
                        {location.map((value, index, array) => (
                            <Accordion.Item
                                key={`level-${index}`}
                                eventKey={`level-${index}`}
                                className="accordion-upper-level"
                            >
                                <Accordion.Button as="div"> {value[0]} 34 localități</Accordion.Button>
                                <Accordion.Collapse eventKey={`level-${index}`}>

                                    {/*** Level #2 ***/}
                                    <>
                                        {array[index][1]}
                                    </>

                                    {/*<Accordion>
                                        {[
                                            ['Chișinău', [
                                                'Aeroport',
                                                'Botanica',
                                                'Buiucani'
                                            ]],
                                            ['Bacioi', [
                                                'Aeroport',
                                                'Botanica',
                                                'Buiucani'
                                            ]],
                                            ['Bubuieci', [
                                                'Aeroport',
                                                'Botanica',
                                                'Buiucani'
                                            ]]
                                        ].map((value, index) => (
                                            <Accordion.Item
                                                eventKey={`level-2-${index}`}
                                                key={`level-2-${index}`}
                                                className="accordion-upper-level"
                                            >
                                                <Accordion.Button as="div">
                                                    {value}
                                                    10 sectoare
                                                    <img src={iconChevronDown} alt=""/>
                                                </Accordion.Button>
                                                <Accordion.Collapse eventKey={`level-2-${index}`}>

                                                    ** Level #3 **
                                                    <>
                                                        {value}
                                                    </>
                                                </Accordion.Collapse>
                                                <Form.Check
                                        key={`popular-localities-${index}`}
                                        id={`popular-localities-${index + 1}`}
                                        type="checkbox"
                                        label={value}
                                        name="popularLocalities"
                                        className=""
                                    />
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>*/}

                                </Accordion.Collapse>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Form.Group>
            </div>
        </>
    )
}

export default SelectLocation
