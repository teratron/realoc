import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

export const title: string = 'Home'

function Home() {
    return (
        <>
            <Header title={title}/>
            <Main></Main>
            <Footer/>
        </>
    )
}

export default Home
