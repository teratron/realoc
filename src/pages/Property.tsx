import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Carousel, Modal} from 'react-bootstrap'
import Header from '../containers/Header'
import Main from '../containers/Main'
import * as conf from '../config.ts'

// Media
import iconCheck from '../assets/media/icon_check_green_circle.svg'
import iconMap from '../assets/media/icon_map.png'
import iconCopy from '../assets/media/icon_copy.svg'
import iconBuilding from '../assets/media/icon_building.svg'
import iconDoor from '../assets/media/icon_door.svg'
import iconArea from '../assets/media/icon_area.svg'
import iconStair from '../assets/media/icon_stair.svg'
import iconSelected from '../assets/media/icon_selected.svg'
import imgEmpty from '../assets/media/empty.png'
import imgEmpty16x9 from '../assets/media/empty_16x9.png'

export const title: string = 'Property'

function Property() {
    const [showGallery, setShowGalleryGallery] = useState(false)
    const handleCloseGallery = () => setShowGalleryGallery(false)
    const handleShowGallery = () => setShowGalleryGallery(true)

    function Gallery() {
        const slides = [
            `${conf.MEDIA}/plug_room_01.jpg`,
            `${conf.MEDIA}/plug_room_01.jpg`,
            `${conf.MEDIA}/plug_room_01.jpg`
        ]
        const numSlides = slides.length

        return (
            <Carousel>
                {slides.map((value, index) => (
                    <Carousel.Item key={`slide-photo-${index}`}>
                        <img
                            src={imgEmpty16x9}
                            className="photo-backdrop"
                            style={{backgroundImage: `url(${value}`}}
                            onClick={handleShowGallery}
                            alt=""/>
                        <Carousel.Caption>{index + 1}/{numSlides}</Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    }

    const [showMap, setShowMap] = useState(false)
    const handleCloseMap = () => setShowMap(false)
    const handleShowMap = () => setShowMap(true)

    function Map() {
        return <img
            src={imgEmpty}
            className="map-backdrop"
            style={{backgroundImage: `url(${conf.MEDIA}/thumb_map.png)`}}
            alt=""/>
    }

    return (
        <>
            <Header title={title}/>
            <Main>
                <Gallery/>

                <div className="app-content">
                    <div className="app-card property-summary">
                        <div className="badges">
                            <span className="badge bg-warning">Vânzare</span>
                            <span className="badge bg-secondary">Apartament</span>
                            <span className="badge bg-secondary"><img src={iconSelected} alt=""/> Credit ipotecar</span>
                            <span className="badge">Apartament</span>
                            <span className="badge bg-success">Vânzare</span>
                        </div>
                        <div className="price">75 000 € <small>1 086 €/m²</small></div>
                        <div className="info">
                            <div className="app-list">
                                <div className="media"><img src={iconBuilding} height={18} alt=""/></div>
                                <div className="key">Fond locativ</div>
                                <div className="value">Constr. noi</div>
                            </div>
                            <div className="app-list">
                                <div className="media"><img src={iconDoor} height={22} alt=""/></div>
                                <div className="key">Apartament</div>
                                <div className="value">2 camere</div>
                            </div>
                            <div className="app-list">
                                <div className="media"><img src={iconArea} height={16} alt=""/></div>
                                <div className="key">Suprafață</div>
                                <div className="value">69 m²</div>
                            </div>
                            <div className="app-list">
                                <div className="media"><img src={iconStair} height={16} alt=""/></div>
                                <div className="key">Nivel</div>
                                <div className="value">3 din 9</div>
                            </div>
                        </div>
                    </div>

                    <div className="app-card">
                        <div className="card-title">Locație</div>
                        <div className="app-row">
                            <div className="body card-text">
                                Chișinău mun., Chișinău, Botanica, bd. Dacia 11/1 <img src={iconCopy} alt=""/>
                                <Link to="/#" className="d-block">Deschideți harta</Link>
                            </div>
                            <div className="foot">
                                <img src={iconMap} onClick={handleShowMap} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="app-card">
                        <div className="card-title">Descriere</div>
                        <div className="card-text">
                            Vă oferim spre vânzare apartament cu 2 camere în bloc NOU, sect. Botanica.
                            În apropierea casei este grădiniță, școală, magazine, farmacie etc.
                        </div>
                    </div>

                    <div className="app-card app-list">
                        <div className="card-title">Despre apartament</div>
                        <div className="list-item">
                            <div>Tip de proprietate</div>
                            <div>Apartament</div>
                        </div>
                        <div className="list-item">
                            <div>Fond locativ</div>
                            <div>Construcții noi</div>
                        </div>
                        <div className="list-item">
                            <div>Număr de camere</div>
                            <div>2 camere</div>
                        </div>
                        <div className="list-item">
                            <div>Suprafață totală</div>
                            <div>69 m²</div>
                        </div>
                        <div className="list-item">
                            <div>Starea apartamentului</div>
                            <div>Euroreparație</div>
                        </div>
                        <div className="list-item">
                            <div>Mobilier</div>
                            <div>Mobilat</div>
                        </div>
                        <div className="list-item">
                            <div>Nivel</div>
                            <div>3 din 9</div>
                        </div>
                    </div>

                    <div className="app-card app-list">
                        <div className="card-title">Despre casa</div>
                        <div className="list-item">
                            <div>Număr de nivele</div>
                            <div>9</div>
                        </div>
                        <div className="list-item">
                            <div>Dezvoltator</div>
                            <div>Exfactor</div>
                        </div>
                        <div className="list-item">
                            <div>Predare în exploatare</div>
                            <div>2024</div>
                        </div>
                        <div className="list-item">
                            <div>Ascensor</div>
                            <div><img src={iconCheck} alt=""/></div>
                        </div>
                        <div className="list-item">
                            <div>Parcare</div>
                            <div>Subterană</div>
                        </div>
                    </div>

                    <div className="app-card app-list">
                        <div className="card-title">Detalii comerciale</div>
                        <div className="list-item">
                            <div>Credit ipotecar</div>
                            <div>Disponibil</div>
                        </div>
                    </div>

                    <div className="navbar">
                        <div className="app-container">
                            <button type="button" className="btn btn-secondary">Împărtășiți obiectul</button>
                        </div>
                    </div>
                </div>

                {/*** Gallery ***/}
                <Modal
                    show={showGallery}
                    onHide={handleCloseGallery}
                    data-bs-theme="dark"
                    className="modal-gallery"
                    fullscreen>
                    <Modal.Header closeButton/>
                    <Modal.Body>
                        <Gallery/>
                    </Modal.Body>
                </Modal>

                {/*** Map ***/}
                <Modal
                    show={showMap}
                    onHide={handleCloseMap}
                    data-bs-theme="light"
                    className="modal-map"
                    fullscreen>
                    <Modal.Header closeButton/>
                    <Modal.Body>
                        <Map/>
                    </Modal.Body>
                </Modal>
            </Main>
        </>
    )
}

export default Property
