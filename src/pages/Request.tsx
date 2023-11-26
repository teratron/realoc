import {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../containers/Header'
import Main from '../containers/Main'
import {Form} from 'react-bootstrap'
import {GetPathName} from '../components/Navigation'

const title: string = 'Add Request'

function Request() {
    const [count, setCount] = useState(254)
    const path = GetPathName()
    const isSelectLocation = path === 'select-location'

    return (
        <>
            <Header
                title={isSelectLocation ? 'Selectați o locație' : title}
                prevPath={isSelectLocation ? 'add-request' : ''}
                resetButton={{id: 'add-request-form', count: 99}}/>
            <Main>
                <Form id="add-request-form" className="app-form">
                    <Outlet/>

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

export default Request
