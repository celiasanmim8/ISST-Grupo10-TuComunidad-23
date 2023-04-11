import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import VerComentario from "../Comentarios/VerComentario";


const VerSugerencias = (props) => {
    const comentariolist = props.comentariolist
    const sugerenciaslist = props.sugerenciaslist
    return (
        <Container style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
            <Row className="my-2">
                <Col>
                    <h2>Últimas sugerencias</h2>
                    <Link to={'/sugerencias/crear'}>
                        <Button>Crear nueva sugerencia</Button>
                    </Link>
                </Col>
            </Row>

            {sugerenciaslist.slice().reverse().map((sugerenciasItem) => (
                <Row className="my-2">
                    <Col key={sugerenciasItem.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title href="#">{sugerenciasItem.titulo}</Card.Title>
                                <Card.Subtitle className="text-muted">
                                    <p>Creado el {sugerenciasItem.fechaCreacion} por Usuario</p>

                                </Card.Subtitle>
                                <Card.Text>{sugerenciasItem.descripcion}</Card.Text>
                                <Button variant='success' type='submit' style={{ width: '7rem' }} href={`/sugerencias/${sugerenciasItem.id}`}>Responder</Button>

                            </Card.Body>
                            <VerComentario comentariolist={comentariolist} sugerenciaslist={sugerenciaslist} sugerenciaId={sugerenciasItem.id} />
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default VerSugerencias;