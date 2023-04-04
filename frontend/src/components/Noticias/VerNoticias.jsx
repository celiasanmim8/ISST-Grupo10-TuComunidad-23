import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Sidebar from './Sidebar';

const VerNoticias = (props) => {
    const noticiaslist = props.noticiaslist
    return (<div class="contenedor-flexbox">


        <Container>
            <Row className="my-2">
                <Col>
                    <h2>Últimas noticias</h2>
                    <Button href="/noticias/crear">Crear nueva noticia</Button>
                </Col>
            </Row>

            {noticiaslist.slice().reverse().map((noticiaItem) => (
                <Row className="my-2">
                    <Col key={noticiaItem.id}>
                        <Link to={`/noticias/${noticiaItem.id}`} style={{color: 'black', textDecoration: 'none'}}>
                            <Card className="flex-fill text-wrap">
                                <Card.Body>
                                    <Card.Title href="#">{noticiaItem.titulo}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <p>Creado el {noticiaItem.fechaCreacion} </p>
                                    </Card.Subtitle>
                                    <Card.Text className="text-truncate">{noticiaItem.descripcion}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            ))}
        </Container>
        </div>
    );
};

export default VerNoticias;