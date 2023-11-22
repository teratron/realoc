import {Link} from 'react-router-dom'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

const title: string = '404'

function NoMatch() {
    return (
        <>
            <Header/>
            <Main>
                <h1>{title}</h1>
                <p>Page not found.</p>
                <p><Link to="/">go home</Link></p>
            </Main>
            <Footer/>
        </>
    )
}

export default NoMatch