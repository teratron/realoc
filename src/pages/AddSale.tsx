import {Form} from 'react-bootstrap'
import {
    SearchHousing,
    SearchLevel,
    SearchLocation,
    SearchApartment,
    SearchTransaction,
    SearchButton
} from '../components/Search'
import Header from '../containers/Header'
import Main from '../containers/Main'

export const title: string = 'Add Sale'

function AddSale() {
    return (
        <>
            <Header/>
            <Main>
                <h2>Adaugă imobiliare</h2>
                <Form className="form">
                    <SearchTransaction/>
                    <SearchHousing/>
                    <SearchLocation/>
                    <SearchApartment/>
                    <SearchLevel/>
                    <SearchButton/>
                </Form>
            </Main>
        </>
    )
}

export default AddSale