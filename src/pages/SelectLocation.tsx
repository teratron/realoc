import {useState} from 'react'
import {Form} from 'react-bootstrap'
import Header from '../containers/Header'
import Main from '../containers/Main'

const title: string = 'Selectați o locație'

function SelectLocation() {
    const [count, setCount] = useState(253)

    return (
        <>
            <Header title={title} resetButton={{id: 'select-location-form', count: 42}}/>
            <Main>
                <Form id="select-location-form" className="app-form">
                    <div className="app-card">

                    </div>

                    <div className="navbar">
                        <div className="app-container">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={() => setCount((count) => count + 1)}>
                                Afișați {count} de anunțuri
                            </button>
                        </div>
                    </div>
                </Form>
            </Main>
        </>
    )
}

export default SelectLocation
