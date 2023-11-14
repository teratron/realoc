import {Link} from 'react-router-dom'
import {Badge, Button, Card, Carousel, Col, Container, Navbar, Row} from 'react-bootstrap'
import Header from '../containers/Header'
import Main from '../containers/Main'

import imageHousing from '../assets/media/plug_room_01.jpg'
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
    const slides = [
        imageHousing,
        imageHousing,
        imageHousing
    ]

    return (
        <>
            <Header title={title}/>
            <Main>
                <Carousel className="mb-3" data-bs-theme="dark">
                    {slides.map((value, index) => (
                        <Carousel.Item key={`slide-${index}`}>
                            <img
                                className="d-block w-100"
                                src={value}
                                alt={`${index + 1} slide`}/>
                            <Carousel.Caption>
                                {index + 1}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className="form">
                    <Card>
                        <div>
                            <Badge bg="warning">Vânzare</Badge>
                            <Badge bg="secondary">Apartament</Badge>
                            <Badge bg="secondary">
                                <img src={iconSelected} alt=""/>
                                Credit ipotecar
                            </Badge>
                        </div>
                        <div>75 000 € <small>1 086 €/m²</small></div>
                        <Row>
                            <Col>
                                <Row><img src={iconBuilding} width={16} height={16} alt=""/></Row>
                                <Row>Fond locativ</Row>
                                <Row>Constr. noi</Row>
                            </Col>
                            <Col>
                                <Row><img src={iconDoor} height={20} alt=""/></Row>
                                <Row>Apartament</Row>
                                <Row>2 camere</Row>
                            </Col>
                            <Col>
                                <Row><img src={iconArea} height={16} alt=""/></Row>
                                <Row>Suprafață</Row>
                                <Row>69 m²</Row>
                            </Col>
                            <Col>
                                <Row><img src={iconStair} height={16} alt=""/></Row>
                                <Row>Nivel</Row>
                                <Row>3 din 9</Row>
                            </Col>
                        </Row>
                    </Card>

                    <Card>
                        <Card.Title>Locație</Card.Title>
                        <Row>
                            <Col>
                                <Card.Text>
                                    Chișinău mun., Chișinău, Botanica,
                                    bd. Dacia 11/1 <img src={iconCopy} alt=""/>
                                </Card.Text>
                            </Col>
                            <Col>
                                <Link to="/add-request">
                                    <img src={iconMap} alt=""/> {/* TODO: change icon */}
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

                    <Card>
                        <Card.Title>Despre apartament</Card.Title>
                        <Row>
                            <Col>Tip de proprietate</Col>
                            <Col>Apartament</Col>
                        </Row>
                        <Row>
                            <Col>Fond locativ</Col>
                            <Col>Construcţii noi</Col>
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

                    <Card>
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
                            <Col>Predare în expluatare</Col>
                            <Col>2024</Col>
                        </Row>
                        <Row>
                            <Col>Ascensor</Col>
                            <Col><img src={iconCheck} alt=""/></Col>
                        </Row>
                        <Row>
                            <Col>Parcare</Col>
                            <Col>Subterană</Col>
                        </Row>
                    </Card>

                    <Card>
                        <Card.Title>Detalii comerciale</Card.Title>
                        <Row>
                            <Col>Credit ipotecar</Col>
                            <Col>Disponibil</Col>
                        </Row>
                    </Card>

                    <Navbar fixed="bottom">
                        <Container>
                            <Button
                                type="button"
                                variant="primary"
                                size="lg">
                                Împărtășiți obiectul
                            </Button>
                        </Container>
                    </Navbar>
                </div>
            </Main>
        </>
    )
}

export default Property
