import {Form, InputGroup} from 'react-bootstrap'

// Media //Popular localities
import iconSearch from '../media/icon_search.svg'
import {JSX}      from 'react/jsx-runtime';
//import iconChevronDown from '../media/icon_chevron_down.svg'

const location = [
    ['--- Chișinău mun.',
        '* Buiucani',
        ['-- Chișinău',
            [
                '* Aeroport',
                '* Botanica',
                '* Buiucani'
            ]
        ],
        [
            '* Aeroport',
            '* Botanica',
            '* Buiucani'
        ],
        ['-- Bacioi',
            [
                '* Aeroport',
                '* Botanica',
                '* Buiucani'
            ]
        ]
    ],
    ['--- Bălți mun.',
        ['-- Bubuieci',
            [
                '* Aeroport',
                '* Botanica',
                '* Buiucani'
            ]
        ]
    ],
    [
        '* Aeroport',
        '* Botanica',
        '* Buiucani'
    ],
    ['--- Bubuieci 2',
        [
            '* Aeroport',
            '* Botanica',
            '* Buiucani'
        ]
    ],
    '* Cahul mun.'
]

type TreeLocation = typeof location

function Tree(array: TreeLocation | string) {

    if (typeof array === 'string') {
        console.log('[*]', array)
        return <TreeItem value={''} index={0}/>
    } else {
        if (Array.isArray(array) && array.every(str => typeof str === 'string')) {
            for (const value of array) {
                Tree(value)
            }
            return
        }

        let index = 0
        for (const value of array) {
            if (typeof value === 'string' && index === 0 && array.length > 1) {
                console.log('[-]', index, value)
            } else {
                Tree(value)
            }
            index++
        }
    }
}

function TreeItem({value = '', index = 0}) {
    return (
        <Form.Check
            key={`popular-localities-${index}`}
            id={`popular-localities-${index + 1}`}
            type="checkbox"
            label={value}
            name="popularLocalities"
            className=""
        />
    )
}

function SelectLocation() {

    //tree(location)

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

                    <Tree array={location as TreeLocation}/>

                    {/*** Level #1 ***/}
                    {/*<Accordion flush>
                        {location.map((value, index, array) => (
                            <Accordion.Item
                                key={`level-${index}`}
                                eventKey={`level-${index}`}
                                className="accordion-upper-level"
                            >
                                <Accordion.Button as="div"> {value[0]} 34 localități</Accordion.Button>
                                <Accordion.Collapse eventKey={`level-${index}`}>

                                    ** Level #2 **
                                    <>
                                        {array[index][1]}
                                    </>



                                </Accordion.Collapse>
                            </Accordion.Item>
                        ))}
                    </Accordion>*/}
                </Form.Group>
            </div>
        </>
    )
}

export default SelectLocation
/*<Accordion>
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
                                    </Accordion>*/