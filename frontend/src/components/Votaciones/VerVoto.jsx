import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import Card from 'react-bootstrap/Card';

import useRequireAuth from '../Login/useRequireAuth';


const VerVoto = (props) => {
    useRequireAuth();
    const votoslist = props.votoslist;
    const id = props.juntaId;
    
    const contarVotosPorJunta = (votoslist, juntaId) => {
        let votosAFavor = 0;
        let votosEnContra = 0;
        let votosAbstencion = 0;
      
        votoslist.forEach((voto) => {
          if (voto.juntaId === juntaId) {
            if (voto.voto === 'A favor') {
              votosAFavor++;
            } else if (voto.voto === 'En contra') {
              votosEnContra++;
            } else if (voto.voto === 'Abstencion') {
              votosAbstencion++;
            }
          }
        });
      
        let opcionGanadora = '';
        let maxVotos = Math.max(votosAFavor, votosEnContra, votosAbstencion);
      
        if (maxVotos === votosAFavor) {
          opcionGanadora = 'A favor';
        } else if (maxVotos === votosEnContra) {
          opcionGanadora = 'En contra';
        } else if (maxVotos === votosAbstencion) {
          opcionGanadora = 'Abstencion';
        }
      
        return {
          votosAFavor,
          votosEnContra,
          votosAbstencion,
          opcionGanadora
        };
      };
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
                                            <Card.Subtitle className="text-muted">{`${votosPorJunta.votosAFavor} votos a favor, ${votosPorJunta.votosEnContra} votos en contra, ${votosPorJunta.votosAbstencion} abstenciones. Opción ganadora: ${votosPorJunta.opcionGanadora}`}</Card.Subtitle>
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