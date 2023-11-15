import {Form} from 'react-bootstrap'
import {
    BlockHousing,
    BlockLevel,
    BlockLocation,
    BlockApartment,
    BlockTransaction,
    FormButton
} from '../components/FormBlock'
import Header from '../containers/Header'
import Main from '../containers/Main'

export const title: string = 'Add Request'

function AddRequest() {
    return (
        <>
            <Header title={title} isResetButton/>
            <Main>
                <h2>Caută imobiliare</h2>
                <Form className="form">
                    <BlockTransaction/>
                    <BlockHousing/>
                    <BlockLocation/>
                    <BlockApartment/>
                    <BlockLevel/>
                    <FormButton/>
                </Form>
            </Main>
        </>
    )
}

export default AddRequest
