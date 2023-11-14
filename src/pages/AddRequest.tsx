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

export const title: string = 'Add Request'

function AddRequest() {
    return (
        <>
            <Header title={title}/>
            <Main>
                <h2>Caută imobiliare</h2>
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

export default AddRequest
