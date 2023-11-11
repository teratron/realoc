import {Link, useLocation} from 'react-router-dom'
//import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'
import BarTop from '../components/BarTop'

function About() {
    return (
        <>
            <BarTop/>
            <Main>
                <div style={{textAlign: "center"}}>{useLocation().pathname}</div>
                <div style={{textAlign: "center"}}>
                    <Link to="/">Home</Link>
                    <span> | </span>
                    <Link to="/about">About</Link>
                    <span> | </span>
                    <Link to="/add">Add</Link>
                </div>
            </Main>
            <Footer/>
        </>
    )
}

export default About