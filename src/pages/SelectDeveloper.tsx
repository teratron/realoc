import {Form, InputGroup} from 'react-bootstrap'

// Media
import iconSearch from '../media/icon_search.svg'

function SelectDeveloper() {
    return (
        <>
            <Form.Group controlId="developer">
                <InputGroup>
                    <InputGroup.Text>
                        <img src={iconSearch} alt=""/>
                    </InputGroup.Text>
                    <Form.Control
                        name="selectDeveloper"
                        type="text"
                        value=""
                        placeholder="Dezvoltator"
                        className="search-control"
                    />
                </InputGroup>
            </Form.Group>

            <div className="app-card form-list">
                <h3 className="alphabet">A</h3>
                {[
                    'Bacioi',
                    'Bubuieci'
                ].map((value, index) => (
                    <Form.Check
                        key={`select-developer-a-${index}`}
                        id={`select-developer-a-${index + 1}`}
                        type="checkbox"
                        label={value}
                        name="selectDeveloper"
                        className="custom-checkbox"
                    />
                ))}

            </div>

            <div className="app-card form-list">
                <h3 className="alphabet">B</h3>
                {[
                    'Bacioi',
                    'Bubuieci'
                ].map((value, index) => (
                    <Form.Check
                        key={`select-developer-b-${index}`}
                        id={`select-developer-b-${index + 1}`}
                        type="checkbox"
                        label={value}
                        name="selectDeveloper"
                        className="custom-checkbox"
                    />
                ))}

            </div>

            <div className="app-pane form-list">
                <h3>Nisporeni</h3>
                <div className="list-item">
                    <div>Tip de proprietate</div>
                    <div>Apartament</div>
                </div>
                <div className="">
                    <Form.Check
                        key="popular-localities-6-0"
                        id="popular-localities-6-1"
                        type="checkbox"
                        label="Chilișoaia"
                        name="popularLocalities"
                        className="custom-checkbox"
                    />
                </div>
            </div>
        </>
    )
}

export default SelectDeveloper
