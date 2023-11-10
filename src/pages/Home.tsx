import React from 'react'

import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

function Home() {
    return (
        <React.Fragment>
            <Header title={"Home"}/>
            <Main/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
