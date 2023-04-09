import { Button, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import Card from 'react-bootstrap/Card';


const VerComentario = (props) => {
    const comentariosList = props.comentariolist;
    const id = props.sugerenciaId;
    console.log(id);
    return (
        <div class="contenedor-flexbox">
            <Container>
                {comentariosList.map((comentarioItem) => (
                    <Row className="my-2">
                        {(comentarioItem.sugerenciaId === id ? 
                            <Col key={comentarioItem.id}>
                                <Card className="flex-fill text-wrap">
                                    <Card.Body>
                                        <Card.Text className="text-truncate">{comentarioItem.descripcion}</Card.Text>             
                                    </Card.Body>
                                </Card>
                            </Col>
                        : null )}    
                    </Row>
                ))}
            </Container>
        </div>
    );
};

export default VerComentario;