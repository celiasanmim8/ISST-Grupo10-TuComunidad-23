import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import VerComentario from "../Comentarios/VerComentario";


const VerSugerencias = (props) => {
    const comentariolist = props.comentariolist
    const sugerenciaslist = props.sugerenciaslist
    return (<div class="contenedor-flexbox">


        <Container>
            <Row className="my-2">
                <Col>
                    <h2>Últimas sugerencias</h2>
                    <Button href="/sugerencias/crear">Crear nueva sugerencia</Button>
                </Col>
            </Row>

            {sugerenciaslist.slice().reverse().map((sugerenciasItem) => (
                <Row className="my-2">
                    <Col key={sugerenciasItem.id}>
                        <Card className="flex-fill text-wrap">
                            <Card.Body>
                                <Card.Title href="#">{sugerenciasItem.titulo}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <p>Creado el {sugerenciasItem.fechaCreacion} </p>

                                </Card.Subtitle>
                                <Card.Text className="text-truncate">{sugerenciasItem.descripcion}</Card.Text>
                                <Button href={`/sugerencias/${sugerenciasItem.id}`}>Responder</Button>

                            </Card.Body>
                            <VerComentario comentariolist={comentariolist} sugerenciaslist = {sugerenciaslist}/>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container>
        </div>
    );
};

export default VerSugerencias;