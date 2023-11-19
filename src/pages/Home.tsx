import {Stack} from 'react-bootstrap'
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
                <Stack gap={2} className="mx-2">
                    <Navigation/>
                </Stack>
            </Main>
            <Footer/>
        </>
    )
}

export default Home
