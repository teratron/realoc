import Header from '../containers/Header'
import Main from '../containers/Main'
import FormAdd from "../components/FormBlock";

export const title: string = 'Add Request'

function AddRequest() {
    return (
        <>
            <Header title={title} isResetButton/>
            <Main>
                <h2>Caută imobiliare</h2>
                <FormAdd/>
            </Main>
        </>
    )
}

export default AddRequest
