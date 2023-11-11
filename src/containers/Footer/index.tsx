// import Container from '../Container'
import {Container, Row, Col} from 'react-bootstrap'
import './_footer.scss'

function Footer() {
    return (
        <footer className="app-footer">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        1 of 3
                    </Col>
                    <Col md="auto">
                        Variable width content
                    </Col>
                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
