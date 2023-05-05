import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

import useRequireAuth from '../Login/useRequireAuth';
import { useState } from "react";


const VerVoto = (props) => {
    useRequireAuth();
    const votoslist = props.votoslist;
    const juntaId = props.juntaId;
    
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

    const [showVotes, setShowVotes] = useState(null);

    const handleShowVotes = (votoId) => {
        setShowVotes(votoId);
    }

    const handleToggleVotes = () => {
        if (showVotes === null) {
            setShowVotes(1);
        } else {
            setShowVotes(null);
        }
    }

    return (
        <div className="contenedor-flexbox">
            <Container>
                {votoslist.map((VotoItem) => (
                    <div key={VotoItem.id}>
                        {(VotoItem.juntaId === juntaId ?
                            <Row className="my-2">
                                <Col>
                                    <Card className="flex-fill text-wrap bg-dark">
                                        <Card.Body >
                                            <Card.Subtitle className="text-muted text-white">Usuario {VotoItem.userId} votó:</Card.Subtitle>
                                            <Card.Text className="text-truncate text-white"style={{fontWeight: 700}}>{VotoItem.voto}</Card.Text>
                                        </Card.Body>
                                        </Card>
                                </Col>
                            </Row>
                            : null)
                        }
                    </div>
                ))}
                <Row className="my-2">
                    <Col>
                        <Button onClick={handleToggleVotes}>
                            {showVotes === null ? 'Mostrar votos de todas las opciones' : 'Ocultar votos'}
                        </Button>
                    </Col>
                </Row>
                {showVotes !== null && (
                    <Row className="my-2">
                        <Col>
                            <Card>
                                <Card.Body>
                                <Card.Title>
                                  Votos totales para esta junta:
                                  <span style={{ color: 'green', fontWeight: 700}}>{` ${contarVotosPorJunta(votoslist, juntaId).votosAFavor} votos a favor, `}</span>
                                  <span style={{ color: 'red', fontWeight: 700 }}>{`${contarVotosPorJunta(votoslist, juntaId).votosEnContra} votos en contra, `}</span>
                                  <span style={{ color: 'orange', fontWeight: 700 }}>{`${contarVotosPorJunta(votoslist, juntaId).votosAbstencion} abstenciones`}</span>
                                </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
            </Container>
        </div>
    );
};
export default VerVoto;