import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

const title: string = 'About'

function About() {
    return (
        <>
            <Header title={title}/>
            <Main>
                <div>{import.meta.env.VITE_SOME_KEY}</div>
            </Main>
            <Footer/>
        </>
    )
}

export default About
