import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

export const title: string = 'About'

function About() {
    return (
        <>
            <Header title={title}/>
            <Main/>
            <Footer/>
        </>
    )
}

export default About