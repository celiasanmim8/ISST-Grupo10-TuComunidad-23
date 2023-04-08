import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


const UnaNoticia = (props) => {
    let{noticiaId} = useParams();
    let position = noticiaId;
    const noticiaslist = props.noticiaslist;

    return (
        <div>
            <div>
                <p className="news-title"><b>{noticiaslist[position - 1].titulo}</b></p>
            </div>
            <div>
                <p className="news-description">{noticiaslist[position - 1].descripcion}</p>
            </div>
            <Button href="/" className="news-button">Volver</Button>
        </div>
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

