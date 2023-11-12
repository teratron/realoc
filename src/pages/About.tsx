import {Link, useLocation} from 'react-router-dom'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/Main'
import {Button, Card, Carousel} from 'react-bootstrap'
import images from '../assets/media/plug_room_01.jpg'
import Pad from '../components/Pad'

export const title: string = 'About'

function About() {
    return (
        <>
            <Header title={"-About-"}/>
            <Main>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div style={{textAlign: "center"}}>{useLocation().pathname}</div>
                <div style={{textAlign: "center"}}>
                    <Link to="/">Home</Link>
                    <span> | </span>
                    <Link to="/about">About</Link>
                    <span> | </span>
                    <Link to="/add">Add</Link>
                </div>

                <Button>Button</Button>

                <Pad className="pad-1">
                    <div>Pad 1</div>
                </Pad>
                <Pad className="pad-2">
                    <div>Pad 2</div>
                </Pad>
                <Pad className="pad-3">
                    <div>Pad 3</div>
                </Pad>

                <Card>
                    Card
                </Card>
            </Main>
            <Footer/>
        </>
    )
}

export default About