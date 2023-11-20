import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Badge, Button, Card, Carousel, Container, Image, Modal, Navbar} from 'react-bootstrap'
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
                    <Card className="summary">
                        <div className="badges">
                            <Badge bg="warning">Vânzare</Badge>
                            <Badge bg="secondary">Apartament</Badge>
                            <Badge bg="secondary"><Image src={iconSelected}/> Credit ipotecar</Badge>
                            <Badge>Apartament</Badge>
                            <Badge bg="success">Vânzare</Badge>
                        </div>
                        <div className="price">75 000 € <small>1 086 €/m²</small></div>
                        <div className="info">
                            <div className="app-list">
                                <div className="media"><Image src={iconBuilding} height={18}/></div>
                                <div className="key">Fond locativ</div>
                                <div className="value">Constr. noi</div>
                            </div>
                            <div className="app-list">
                                <div className="media"><Image src={iconDoor} height={22}/></div>
                                <div className="key">Apartament</div>
                                <div className="value">2 camere</div>
                            </div>
                            <div className="app-list">
                                <div className="media"><Image src={iconArea} height={16}/></div>
                                <div className="key">Suprafață</div>
                                <div className="value">69 m²</div>
                            </div>
                            <div className="app-list">
                                <div className="media"><Image src={iconStair} height={16}/></div>
                                <div className="key">Nivel</div>
                                <div className="value">3 din 9</div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <Card.Title>Locație</Card.Title>
                        <div className="app-list-item">
                            <div className="body card-text">
                                Chișinău mun., Chișinău, Botanica,
                                bd. Dacia 11/1 <Image src={iconCopy}/>
                                <Link to="/#">Deschideți harta</Link>
                            </div>
                            <div className="foot">
                                <Link to="/#">
                                    <Image src={iconMap}/>
                                </Link>
                            </div>
                        </div>
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
                        <div className="app-list-item">
                            <div>Tip de proprietate</div>
                            <div>Apartament</div>
                        </div>
                        <div className="app-list-item">
                            <div>Fond locativ</div>
                            <div>Construcții noi</div>
                        </div>
                        <div className="app-list-item">
                            <div>Număr de camere</div>
                            <div>2 camere</div>
                        </div>
                        <div className="app-list-item">
                            <div>Suprafață totală</div>
                            <div>69 m²</div>
                        </div>
                        <div className="app-list-item">
                            <div>Starea apartamentului</div>
                            <div>Euroreparație</div>
                        </div>
                        <div className="app-list-item">
                            <div>Mobilier</div>
                            <div>Mobilat</div>
                        </div>
                        <div className="app-list-item">
                            <div>Nivel</div>
                            <div>3 din 9</div>
                        </div>
                    </Card>

                    <Card className="app-list">
                        <Card.Title>Despre casa</Card.Title>
                        <div className="app-list-item">
                            <div>Număr de nivele</div>
                            <div>9</div>
                        </div>
                        <div className="app-list-item">
                            <div>Dezvoltator</div>
                            <div>Exfactor</div>
                        </div>
                        <div className="app-list-item">
                            <div>Predare în exploatare</div>
                            <div>2024</div>
                        </div>
                        <div className="app-list-item">
                            <div>Ascensor</div>
                            <div><Image src={iconCheck}/></div>
                        </div>
                        <div className="app-list-item">
                            <div>Parcare</div>
                            <div>Subterană</div>
                        </div>
                    </Card>

                    <Card className="app-list">
                        <Card.Title>Detalii comerciale</Card.Title>
                        <div className="app-list-item">
                            <div>Credit ipotecar</div>
                            <div>Disponibil</div>
                        </div>
                    </Card>

                    <Navbar>
                        <Container>
                            <Button variant="secondary" type="button">Împărtășiți obiectul</Button>
                        </Container>
                    </Navbar>
                </div>
            </Main>
        </>
    )
}

export default Property
