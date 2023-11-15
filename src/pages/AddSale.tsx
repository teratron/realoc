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

export const title: string = 'Add Sale'

function AddSale() {
    return (
        <>
            <Header title={title}/>
            <Main>
                <h2>Adaugă imobiliare</h2>
                <Form className="form">
                    <BlockTransaction/>
                    <BlockHousing isAddSale/>
                    <BlockLocation/>
                    <BlockApartment/>
                    <BlockLevel/>
                    <FormButton/>
                </Form>
            </Main>
        </>
    )
}

export default AddSale