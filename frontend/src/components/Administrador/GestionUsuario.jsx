import useRequireAuth from "../Login/useRequireAuth";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const GestionUsuario = (props) => {
    useRequireAuth();
    const usuarioslist = props.usuarioslist;

    const RolesList = ({ roles }) => (
        <ul>
            {roles.sort((a, b) => a.nombre.localeCompare(b.nombre))
            .map((role, index) => (
                <li key={index}>{role.nombre}</li>
            ))}
        </ul>
    );

    return (
        <Container style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
            <Row className="my-2">
                <Col>
                    <h2>Gestión de usuarios</h2>
                </Col>
            </Row>
            <Row>
                {usuarioslist.slice().reverse().map((usuarioItem) => (
                    <Col key={usuarioItem.id} md={4}>
                        {/* Poner un link para modificar */}
                        <Card className="my-1">
                            <Card.Body stlye = {{ maxWidth: '90%' }}>
                                <Card.Title>{usuarioItem.tlfNumber}</Card.Title>
                                <Card.Subtitle className="text-muted">
                                    <p>DNI: {usuarioItem.datosVecino.dni}<br/>
                                    Dirección: {usuarioItem.datosVecino.piso}{usuarioItem.datosVecino.letra}<br/>
                                    Roles: <RolesList roles={usuarioItem.roles}/></p>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default GestionUsuario;