import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import Card from 'react-bootstrap/Card';


const VerComentario = (props) => {
    const comentariosList = props.comentariolist;
    const id = props.sugerenciaId;
    return (
        <div class="contenedor-flexbox">
            <Container>
                {comentariosList.map((comentarioItem) => (
                    <div>
                        {(comentarioItem.sugerenciaId === id ?
                            <Row className="my-2">
                                <Col key={comentarioItem.id}>
                                    <Card className="flex-fill text-wrap">
                                        <Card.Body >
                                            <Card.Subtitle className="text-muted">Usuario XYZ respondió:</Card.Subtitle>
                                            <Card.Text className="text-truncate">{comentarioItem.descripcion}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            : null)}
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default VerComentario;