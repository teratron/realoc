import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'
import Navigation from '../components/Navigation'

export const title: string = 'Home'

function Home() {
    return (
        <>
            <Header title={title}/>
            <Main>
                <Navigation/>
            </Main>
            <Footer/>
        </>
    )
}

export default Home
