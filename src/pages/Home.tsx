import {Link, useLocation} from 'react-router-dom'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'
import Pad from '../containers/Pad'
import Button from '../components/Button'

function Home() {
    return (
        <>
            <Header title={"-Home-"}/>
            <Main>
                <div style={{textAlign: "center"}}>{useLocation().pathname}</div>
                <div style={{textAlign: "center"}}>
                    <Link to="/">Home</Link>
                    <span> | </span>
                    <Link to="/about">About</Link>
                    <span> | </span>
                    <Link to="/add">Add</Link>
                </div>

                <Button className="outlined raised icon">Button</Button>

                <Pad className="pad-1">
                    <div>Pad 1</div>
                </Pad>
                <Pad className="pad-2">
                    <div>Pad 2</div>
                </Pad>
                <Pad className="pad-3">
                    <div>Pad 3</div>
                </Pad>
            </Main>
            <Footer/>
        </>
    )
}

export default Home
