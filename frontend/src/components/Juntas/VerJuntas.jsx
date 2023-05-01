import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import useRequireAuth from '../Login/useRequireAuth';

const VerJuntas = (props) => {
    useRequireAuth();
    const juntaslist = props.juntaslist
    return (
        <Container style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
            <Row className="my-2">
                <Col>
                    <h2>Juntas</h2>
                    <Link to={'/juntas/crear'}>
                        <Button>Crear nueva junta</Button>
                    </Link>
                </Col>
            </Row>

            {juntaslist.slice().reverse().map((juntaItem) => (
                <Row className="my-2">
                    <Col key={juntaItem.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title href="#">{juntaItem.titulo}</Card.Title>
                                <Card.Subtitle className="text-muted">
                                    <p>Creado el {juntaItem.fechaCreacion} por Usuario</p>
                                </Card.Subtitle>
                                <Card.Text>{juntaItem.descripcion}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default VerJuntas;