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

/*function Move() {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(document.getElementById('source')!);
    document.getElementById('destination')!.appendChild(fragment);
}*/

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
            <Carousel data-bs-theme="dark">
                {slides.map((value, index) => (
                    <Carousel.Item key={`slide-${index}`}>
                        <img src={value} onClick={handleShow} className="d-block w-100" alt=""/>
                        <Carousel.Caption>
                            {index + 1}/{numSlides}
                        </Carousel.Caption>
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

                <Modal data-bs-theme="dark" show={show} onHide={handleClose} fullscreen centered>
                    <Modal.Header closeButton/>
                    <Modal.Body>
                        <Gallery/>
                    </Modal.Body>
                </Modal>

                <div className="app-content">
                    <Card>
                        <div>
                            <Badge bg="warning">Vânzare</Badge>
                            <Badge bg="secondary">Apartament</Badge>
                            <Badge bg="secondary">
                                <Image src={iconSelected}/>
                                Credit ipotecar
                            </Badge>
                        </div>
                        <div>75 000 € <small>1 086 €/m²</small></div>
                        <Row className="app-list">
                            <Col>
                                <Row><Image src={iconBuilding} width={16} height={16}/></Row>
                                <Row>Fond locativ</Row>
                                <Row>Constr. noi</Row>
                            </Col>
                            <Col>
                                <Row><Image src={iconDoor} height={20}/></Row>
                                <Row>Apartament</Row>
                                <Row>2 camere</Row>
                            </Col>
                            <Col>
                                <Row><Image src={iconArea} height={16}/></Row>
                                <Row>Suprafață</Row>
                                <Row>69 m²</Row>
                            </Col>
                            <Col>
                                <Row><Image src={iconStair} height={16}/></Row>
                                <Row>Nivel</Row>
                                <Row>3 din 9</Row>
                            </Col>
                        </Row>
                    </Card>

                    <Card>
                        <Card.Title>Locație</Card.Title>
                        <Row className="app-list">
                            <Col>
                                <Card.Text>
                                    Chișinău mun., Chișinău, Botanica,
                                    bd. Dacia 11/1 <Image src={iconCopy}/>
                                </Card.Text>
                            </Col>
                            <Col>
                                <Link to="/add-request">
                                    <Image src={iconMap}/>
                                </Link>
                            </Col>
                        </Row>
                        <Link to="/add-request">Deschideți harta</Link>
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
                            <Button type="button" variant="secondary">Împărtășiți obiectul</Button>
                        </Container>
                    </Navbar>
                </div>
            </Main>
        </>
    )
}

export default Property
