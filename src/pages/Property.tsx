import Header from '../containers/Header'
import Main from '../containers/Main'
import {Button, Card, Carousel, Container, Navbar} from 'react-bootstrap'
import images from '../assets/media/plug_room_01.jpg'
import List from '../components/List'

export const title: string = 'Property'

function Property() {
    const slides = [
        images,
        images,
        images
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

                <Card></Card>

                <Card></Card>

                <Card></Card>

                <Card></Card>

                <Card></Card>

                <Card>
                    <Card.Title>Detalii comerciale</Card.Title>
                    <List>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </List>
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
            </Main>
        </>
    )
}

export default Property