import { Form } from 'react-bootstrap'
import {
    BlockHousing,
    BlockLevel,
    BlockLocation,
    BlockApartment,
    BlockTransaction,
    FormButton,
    BlockFee,
    BlockPhoto
} from '../components/FormBlock'
import { Formik } from 'formik'
import Header from '../containers/Header'
import Main from '../containers/Main'

export const title: string = 'Add Sale'

function AddSale() {
    return (
        <>
            <Header title={title} />
            <Main>
                <h2>Adaugă imobiliare</h2>
                <Formik
                    initialValues={{
                        picked: '',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500))
                        alert(JSON.stringify(values, null, 2))
                    }}>
                    {({ values }) => (
                        <Form className="form">
                            <BlockTransaction />
                            <BlockHousing />
                            <BlockLocation />
                            <BlockPhoto />
                            <BlockApartment />
                            <BlockLevel />
                            <BlockFee />
                            <FormButton />
                        </Form>
                    )}
                </Formik>
            </Main>
        </>
    )
}

export default AddSale
