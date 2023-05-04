import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import Card from 'react-bootstrap/Card';

import useRequireAuth from '../Login/useRequireAuth';


const VerVoto = (props) => {
    useRequireAuth();
    const votoslist = props.votoslist;
    const id = props.juntaId;
    
    const contarVotosPorJunta = (votoslist, juntaId) => {
        return votoslist.reduce((contador, voto) => {
          if (voto.juntaId === juntaId) {
            if (voto.voto === 'A favor') {
              contador.aFavor++;
            } else if (voto.voto === 'En contra') {
              contador.enContra++;
            } else if (voto.voto === 'Abstención') {
              contador.abstencion++;
            }
          }
          return contador;
        }, { aFavor: 0, enContra: 0, abstencion: 0 });
    }
    const votosPorJunta = contarVotosPorJunta(votoslist, id);
    return (
        <div className="contenedor-flexbox">
            <Container>
                {votoslist.map((VotoItem) => (
                    <div key={VotoItem.id}>
                        {(VotoItem.juntaId === parseInt(id) ?
                            <Row className="my-2">
                                <Col>
                                    <Card className="flex-fill text-wrap">
                                        <Card.Body >
                                            <Card.Subtitle className="text-muted">Usuario XYZ votó:</Card.Subtitle>
                                            <Card.Text className="text-truncate">{VotoItem.voto}</Card.Text>
                                            <Card.Subtitle className="text-muted">{`${votosPorJunta.aFavor} votos a favor, ${votosPorJunta.enContra} votos en contra, ${votosPorJunta.abstencion} abstenciones`}</Card.Subtitle>
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