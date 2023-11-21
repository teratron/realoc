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
                <div className="vstack gap-2 mx-2">
                    <Navigation/>
                </div>
            </Main>
            <Footer/>
        </>
    )
}

export default Home
