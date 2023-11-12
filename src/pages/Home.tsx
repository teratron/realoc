import {Link, useLocation} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'

export const title: string = 'Home'

function Home() {
    const _count = 254

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

                <h2>Cauta imobiliare</h2>

                <Card>
                    <div>Card</div>
                </Card>

                <Card>
                    <div>Card</div>
                </Card>

                <Card>
                    <div>Card</div>
                </Card>

                <Card>
                    <div>Card</div>
                </Card>
            </Main>

            <Footer>
                <Button variant="primary">Afisati {_count} de anunturi</Button>
            </Footer>
        </>
    )
}

export default Home
