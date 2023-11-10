import {Link, useLocation} from 'react-router-dom'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'
import Card from '../containers/Card'

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
                <Card className="card-1">
                    <div>Card 1</div>
                </Card>
                <Card className="card-2">
                    <div>Card 2</div>
                </Card>
                <Card className="card-3">
                    <div>Card 3</div>
                </Card>
            </Main>
            <Footer/>
        </>
    )
}

export default Home
