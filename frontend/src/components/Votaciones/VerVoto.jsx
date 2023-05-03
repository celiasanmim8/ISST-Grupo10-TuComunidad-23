import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import Card from 'react-bootstrap/Card';

import useRequireAuth from '../Login/useRequireAuth';


const VerVoto = (props) => {
    useRequireAuth();
    const votoslist = props.votoslist;
    const id = props.juntaId;
    return (
        <div className="contenedor-flexbox">
            <Container>
                {votoslist.map((VotoItem) => (
                    <div key={VotoItem.id}>
                        {(VotoItem.juntaId === id ?
                            <Row className="my-2">
                                <Col>
                                    <Card className="flex-fill text-wrap">
                                        <Card.Body >
                                            <Card.Subtitle className="text-muted">Usuario XYZ respondió:</Card.Subtitle>
                                            <Card.Text className="text-truncate">{VotoItem.voto}</Card.Text>
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

export default VerVoto;