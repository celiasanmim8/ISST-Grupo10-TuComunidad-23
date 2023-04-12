import { useState } from "react";
import { Button, Col, Image, Row, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


const UnaNoticia = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleImageSize = () => {
        setIsExpanded(!isExpanded);
    }

    const smallSize = { maxWidth: '10em', cursor: 'pointer' };
    const largeSize = { maxWidth: '100%', cursor: 'pointer' };
    const imageSize = isExpanded ? largeSize : smallSize;

    let { noticiaId } = useParams();
    let position = noticiaId;
    const noticiaslist = props.noticiaslist;

    return (
        <Container style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
            <Row className="text-break">
                <Col>
                    <p className="news-title"><b>{noticiaslist[position - 1].titulo}</b></p>
                    <p className="news-description">{noticiaslist[position - 1].descripcion}</p>
                </Col>
            </Row>
            <Row className="justify-content-center my-3 mx-5">
                {noticiaslist[position - 1].adjunto && (
                    <Image
                        src={`data:image/*;base64,${noticiaslist[position - 1].adjunto}`}
                        rounded="true"
                        thumbnail="true"
                        className="justify-center"
                        style={imageSize}
                        onClick={toggleImageSize}
                    />
                )}
            </Row>
            <Row className="mb-3">
                <div className="news-button">
                    <Link to={'/noticias'}>
                        <Button>Volver</Button>
                    </Link>
                </div>
            </Row>
        </Container>
    );
};

export default UnaNoticia;

/*
        <div>
        <div>
         <p className="news-title"><b>{noticiaslist[position - 1].titulo}</b></p>
        </div>
        <div>
         <p className="news-description">{noticiaslist[position - 1].descripcion}</p>
        </div>
        </div>


        <div class="card text-center">
        <div class="card-header">
            NOTICIA
        </div>
        <div class="card-body">
            <h5 class="card-title">{noticiaslist[position - 1].titulo}</h5>
            <p class="card-text">{noticiaslist[position - 1].descripcion}</p>
            <a href="/" class="btn btn-primary">Volver</a>
        </div>
        <div class="card-footer text-muted">
            {noticiaslist[position - 1].fechaCreacion}
        </div>
    </div>
*/

