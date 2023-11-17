import { Form } from 'react-bootstrap'
import {
    HousingBlock,
    LevelBlock,
    LocationBlock,
    ApartmentBlock,
    TransactionBlock,
    FormButton,
    FeeBlock,
    PhotoBlock
} from '../components/FormBlocks'
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
                        number_of_rooms: 0,
                        sale_price: 0.0
                    }}
                    onSubmit = {async (values) => {
                        await new Promise((r) => setTimeout(r, 500))
                        alert(JSON.stringify(values, null, 2))
                    }}>
                    {({
                          handleSubmit,
                          handleChange,
                          values,
                          touched,
                          errors
                    }) => (
                        <Form className="form" noValidate onSubmit={handleSubmit}>
                            <TransactionBlock/>
                            <HousingBlock handleChange={handleChange} values={values} touched={touched} errors={errors}/>
                            <LocationBlock/>
                            <PhotoBlock/>
                            <ApartmentBlock/>
                            <LevelBlock/>
                            <FeeBlock/>
                            <FormButton />
                        </Form>
                    )}
                </Formik>
            </Main>
        </>
    )
}

export default AddSale
