import React from 'react'

import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

function About() {
    return (
        <React.Fragment>
            <Header title={"-About-"}/>
            <Main/>
            <Footer/>
        </React.Fragment>
    )
}

export default About