import {ChangeEvent, FormEvent, useCallback, useState} from 'react'
import {Outlet}                           from 'react-router-dom'
import Header                             from '../containers/Header'
import Main                               from '../containers/Main'
import {Form}                             from 'react-bootstrap'
import {GetPathName}                      from '../components/Navigation'
import {formData, search, searchCount}    from '../api'
import debounce                           from 'lodash.debounce'

let title: string = 'Add Request'

function Request() {
    const path = GetPathName()
    switch (path) {
        case 'select-location':
            title = 'Selectați o locație'
            break
        case 'select-developer':
            title = 'Selectați dezvoltator'
            break
    }

    const [count, setCount] = useState(254)
    const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const searchResult = await search(formData(event.currentTarget))
        window.location.href = import.meta.env.VITE_BOT_URL + searchResult.join(',')
    }

    const formChangeHandler = async (event: ChangeEvent<HTMLFormElement>): Promise<void> => {
        const form = event.target.form
        const total = await searchCount(formData(form))
        setCount(() => total)
    }
    const debounced = debounce(formChangeHandler, 1000)

    const debouncedFormChangeHandler = useCallback((e: ChangeEvent<HTMLFormElement>) => debounced(e), [debounced]);

    return (
        <>
            <Header
                title={title}
                prevPath={path !== 'add-request' ? 'add-request' : ''}
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
