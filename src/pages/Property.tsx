import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Badge, Button, Card, Carousel, Col, Container, Image, Modal, Navbar, Row} from 'react-bootstrap'
import Header from '../containers/Header'
import Main from '../containers/Main'

// Media
import iconCheck from '../assets/media/icon_check_green_circle.svg'
import iconMap from '../assets/media/icon_map.png'
import iconCopy from '../assets/media/icon_copy.svg'
import iconBuilding from '../assets/media/icon_building.svg'
import iconDoor from '../assets/media/icon_door.svg'
import iconArea from '../assets/media/icon_area.svg'
import iconStair from '../assets/media/icon_stair.svg'
import iconSelected from '../assets/media/icon_selected.svg'

export const title: string = 'Property'

function Property() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    function Gallery() {
        const slides = [
            '../assets/media/plug_room_01.jpg',
            '../assets/media/plug_room_01.jpg',
            '../assets/media/plug_room_01.jpg'
        ]
        const numSlides = slides.length

        return (
            <Carousel>
                {slides.map((value, index) => (
                    <Carousel.Item key={`slide-${index}`}>
                        <img src={value} onClick={handleShow} alt=""/>
                        <Carousel.Caption>{index + 1}/{numSlides}</Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    }

    return (
        <>
            <Header title={title}/>
            <Main>
                <Gallery/>

                <Modal show={show} onHide={handleClose} fullscreen centered>
                    <Modal.Header data-bs-theme="dark" closeButton/>
                    <Modal.Body>
                        <Gallery/>
                    </Modal.Body>
                </Modal>

                <div className="app-content">
                    <Card className="property-summary">
                        <Card.Text>
                            <Badge bg="warning">Vânzare</Badge>
                            <Badge bg="secondary">Apartament</Badge>
                            <Badge bg="secondary"><Image src={iconSelected}/> Credit ipotecar</Badge>
                        </Card.Text>
                        <Card.Title>75 000 € <small>1 086 €/m²</small></Card.Title>
                        <Row className="app-list">
                            <Col>
                                <div><Image src={iconBuilding} width={16} height={16}/></div>
                                <small>Fond locativ</small>
                                <Card.Subtitle>Constr. noi</Card.Subtitle>
                            </Col>
                            <Col>
                                <div><Image src={iconDoor} height={20}/></div>
                                <Card.Text>Apartament</Card.Text>
                                <Card.Subtitle>2 camere</Card.Subtitle>
                            </Col>
                            <Col>
                                <div><Image src={iconArea} height={16}/></div>
                                <Card.Text>Suprafață</Card.Text>
                                <Card.Subtitle>69 m²</Card.Subtitle>
                            </Col>
                            <Col>
                                <div><Image src={iconStair} height={16}/></div>
                                <Card.Text>Nivel</Card.Text>
                                <Card.Subtitle>3 din 9</Card.Subtitle>
                            </Col>
                        </Row>
                    </Card>

                    <Card>
                        <Card.Title>Locație</Card.Title>
                        <Row className="app-list">
                            <Col className="body">
                                <Card.Title>
                                    Chișinău mun., Chișinău, Botanica,
                                    bd. Dacia 11/1 <Image src={iconCopy}/>
                                </Card.Title>
                            </Col>
                            <Col className="foot">
                                <Link to="/#">
                                    <Image src={iconMap}/>
                                </Link>
                            </Col>
                        </Row>
                        <Link to="/#">Deschideți harta</Link>
                    </Card>

                    <Card>
                        <Card.Title>Descriere</Card.Title>
                        <Card.Text>
                            Vă oferim spre vânzare apartament cu 2 camere în bloc NOU, sect. Botanica.
                            În apropierea casei este grădiniță, școală, magazine, farmacie etc.
                        </Card.Text>
                    </Card>

                    <Card className="app-list">
                        <Card.Title>Despre apartament</Card.Title>
                        <Row>
                            <Col>Tip de proprietate</Col>
                            <Col>Apartament</Col>
                        </Row>
                        <Row>
                            <Col>Fond locativ</Col>
                            <Col>Construcții noi</Col>
                        </Row>
                        <Row>
                            <Col>Număr de camere</Col>
                            <Col>2 camere</Col>
                        </Row>
                        <Row>
                            <Col>Suprafață totală</Col>
                            <Col>69 m²</Col>
                        </Row>
                        <Row>
                            <Col>Starea apartamentului</Col>
                            <Col>Euroreparație</Col>
                        </Row>
                        <Row>
                            <Col>Mobilier</Col>
                            <Col>Mobilat</Col>
                        </Row>
                        <Row>
                            <Col>Nivel</Col>
                            <Col>3 din 9</Col>
                        </Row>
                    </Card>

                    <Card className="app-list">
                        <Card.Title>Despre casa</Card.Title>
                        <Row>
                            <Col>Număr de nivele</Col>
                            <Col>9</Col>
                        </Row>
                        <Row>
                            <Col>Dezvoltator</Col>
                            <Col>Exfactor</Col>
                        </Row>
                        <Row>
                            <Col>Predare în exploatare</Col>
                            <Col>2024</Col>
                        </Row>
                        <Row>
                            <Col>Ascensor</Col>
                            <Col><Image src={iconCheck}/></Col>
                        </Row>
                        <Row>
                            <Col>Parcare</Col>
                            <Col>Subterană</Col>
                        </Row>
                    </Card>

                    <Card>
                        <Card.Title>Detalii comerciale</Card.Title>
                        <Row className="app-list">
                            <Col>Credit ipotecar</Col>
                            <Col>Disponibil</Col>
                        </Row>
                    </Card>

                    <Navbar>
                        <Container>
                            <Button type="button">Împărtășiți obiectul</Button>
                        </Container>
                    </Navbar>
                </div>
            </Main>
        </>
    )
}

export default Property
