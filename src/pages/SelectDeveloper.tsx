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
                    'A-casa',
                    'Amic',
                    'A-casa',
                    'Amic'
                ].map((value, index) => (
                    <Form.Check
                        key={`select-developer-a-${index}`}
                        id={`select-developer-a-${index + 1}`}
                        type="checkbox"
                        label={value}
                        name="selectDeveloper"
                        className="custom-checkbox list-item"
                    />
                ))}

            </div>

            <div className="app-card form-list">
                <h3 className="alphabet">B</h3>
                {[
                    'Basconslux',
                    'Boiar House'
                ].map((value, index) => (
                    <Form.Check
                        key={`select-developer-b-${index}`}
                        id={`select-developer-b-${index + 1}`}
                        type="checkbox"
                        label={value}
                        name="selectDeveloper"
                        className="custom-checkbox list-item"
                    />
                ))}

            </div>

            <div className="app-pane form-list">
                {[
                    'Armoson Invest',
                    'Art Urban Grup'
                ].map((value, index) => (
                    <Form.Check
                        key={`select-developer-find-${index}`}
                        id={`select-developer-find-${index + 1}`}
                        type="checkbox"
                        label={value}
                        name="selectDeveloper"
                        className="custom-checkbox list-item"
                    />
                ))}
            </div>
        </>
    )
}

export default SelectDeveloper
