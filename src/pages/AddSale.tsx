import Header from '../containers/Header'
import Main from '../containers/Main'
import FormAdd from '../components/FormAdd'

export const title: string = 'Add Sale'

function AddSale() {
    return (
        <>
            <Header title={title}/>
            <Main>
                <h2>Adaugă imobiliare</h2>
                <FormAdd isAddSalePage/>
            </Main>
        </>
    )
}

export default AddSale
