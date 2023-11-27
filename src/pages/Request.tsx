import {FormEvent, useCallback, useState} from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../containers/Header'
import Main from '../containers/Main'
import {Form} from 'react-bootstrap'
import {GetPathName} from '../components/Navigation'
import {formData, search, searchCount} from '../api'
import debounce from 'lodash.debounce'

const title: string = 'Add Request'

function Request() {
    const path = GetPathName()
    const isSelectLocation = path === 'select-location'

    const [count, setCount] = useState(254)
    const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const searchResult = await search(formData(event.currentTarget))
        console.log('formSubmitHandler', searchResult);
    }

    const formChangeHandler = async (event: FormEvent<HTMLFormElement>) => {
        // @ts-expect-error TS does not recognize .form
        const form = event.target.form
        const total = await searchCount(formData(form))
        setCount(() => total)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedFormChangeHandler = useCallback(debounce(formChangeHandler, 1000), []);

    return (
        <>
            <Header
                title={isSelectLocation ? 'Selectați o locație' : title}
                prevPath={isSelectLocation ? 'add-request' : ''}
                resetButton={{id: 'add-request-form', count: 99}}
            />
            <Main>
                <Form
                    id="add-request-form"
                    className="app-form"
                    onSubmitCapture={formSubmitHandler}
                    onChange={debouncedFormChangeHandler}
                >
                    <Outlet/>

                    <div className="navbar">
                        <div className="app-container">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
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
