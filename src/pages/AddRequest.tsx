import {Form} from 'react-bootstrap'
import {
    HousingBlock,
    LevelBlock,
    LocationBlock,
    ApartmentBlock,
    TransactionBlock,
    FormButton
} from '../components/FormBlocks'
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
                    <TransactionBlock/>
                    <HousingBlock/>
                    <LocationBlock/>
                    <ApartmentBlock/>
                    <LevelBlock/>
                    <FormButton/>
                </Form>
            </Main>
        </>
    )
}

export default AddRequest
