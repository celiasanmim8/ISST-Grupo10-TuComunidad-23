import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const VerContacto = () => {
    return (
        <div class="contenedor-flexbox">
            <Container>
                <Row className="my-2">
                    <Col>
                        <h2>Contactos</h2>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col>
                        <Card className="flex-fill text-wrap my-1">
                            <Card.Body>
                                <Card.Title href="#">Presidente</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <p>Contactos del presidente</p>
                                </Card.Subtitle>
                                <Card.Text className="text-truncate"><b>Teléfono:</b> 000000000</Card.Text>
                                <Card.Text className="text-truncate"><b>Email:</b> presidente@correo.com</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="flex-fill text-wrap my-1">
                            <Card.Body>
                                <Card.Title href="#">Administrador</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <p>Contactos del administrador</p>
                                </Card.Subtitle>
                                <Card.Text className="text-truncate"><b>Teléfono:</b> 000000000</Card.Text>
                                <Card.Text className="text-truncate"><b>Email:</b> admin@correo.com</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default VerContacto;