import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import Card from 'react-bootstrap/Card';


const VerComentario = (props) => {
    const comentariosList = props.comentariolist
    return (
        <div class="contenedor-flexbox">
            <Container>
                {comentariosList.slice().reverse().map((comentarioItem) => (
                    <Row className="my-2">
                        <Col key={comentarioItem.id}>
                            <Card className="flex-fill text-wrap">
                                <Card.Body>
                                    <Card.Text className="text-truncate">{comentarioItem.descripcion}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default VerComentario;