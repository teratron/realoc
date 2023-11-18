import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'
import Modal from '../components/Modal'

export const title: string = 'About'

function About() {
    return (
        <>
            <Header title={title}/>
            <Main>
                <Modal/>
            </Main>
            <Footer/>
        </>
    )
}

export default About
