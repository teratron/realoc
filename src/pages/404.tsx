import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

export const title: string = '404'

function NotFound() {
    return (
        <>
            <Header/>
            <Main>
                <h1>{title}</h1>
                <p>Page not found.</p>
            </Main>
            <Footer/>
        </>
    )
}

export default NotFound