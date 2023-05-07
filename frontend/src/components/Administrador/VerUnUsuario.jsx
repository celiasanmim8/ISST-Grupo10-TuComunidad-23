import useRequireAuth from "../Login/useRequireAuth";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Container, Row, Form, Col } from "react-bootstrap";
import { useState } from "react";

const VerUnUsuario = (props) => {
    useRequireAuth();
    let { usuarioId } = useParams();
    const usuariosFiltered = props.usuarioslist.filter(user => user.id === parseInt(usuarioId, 10))[0];

    const [rol, setRol] = useState(usuariosFiltered.roles[0].nombre);
    const [tlfNumber, setTlfNumber] = useState(usuariosFiltered.tlfNumber);
    const [piso, setPiso] = useState(usuariosFiltered.datosVecino.piso);
    const [letra, setLetra] = useState(usuariosFiltered.datosVecino.letra);
    const [dni, setDni] = useState(usuariosFiltered.datosVecino.dni);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuarioItem = {
            id: parseInt(usuarioId, 10),
            tlfNumber: tlfNumber.toString(),
            roles: [{ "nombre": rol.toString() }],
            datosVecino: {
                piso: piso,
                letra: letra.toString(),
                dni: dni.toString()
            }
        };

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token },
            body: JSON.stringify(usuarioItem)
        };

        await fetch(`http://localhost:8080/gestionusuarios/${usuarioId}`, requestOptions)

        navigate("/gestionusuarios");
    }

    return (
        <Container style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
            <Row className="my-2">
                <h2>Modificación de datos de vecino y rol</h2>
            </Row>

            <Form onSubmit={handleSubmit}>
                <Col md={3}>
                    <Form.Group className="mb-3">
                        <Form.Label className="h4">Número de teléfono</Form.Label>
                        <Form.Control type="text" value={tlfNumber} onChange={(e) => setTlfNumber(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-4">
                        <Form.Label className="h4">Rol</Form.Label>
                        <Form.Check
                            type="radio"
                            label="Vecino"
                            name="valor"
                            value="ROLE_VECINO"
                            checked={rol === "ROLE_VECINO"}
                            onChange={(e) => setRol(e.target.value)}>
                        </Form.Check>
                        <Form.Check
                            type="radio"
                            label="Presidente"
                            name="valor"
                            value="ROLE_PRESIDENTE"
                            checked={rol === "ROLE_PRESIDENTE"}
                            onChange={(e) => setRol(e.target.value)}>
                        </Form.Check>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="h4">Piso</Form.Label>
                        <Form.Control type="text" value={piso} onChange={(e) => setPiso(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="h4">Letra</Form.Label>
                        <Form.Control type="text" value={letra} onChange={(e) => setLetra(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="h4">Dni</Form.Label>
                        <Form.Control type="text" value={dni} onChange={(e) => setDni(e.target.value)}></Form.Control>
                    </Form.Group>
                </Col>

                <Button variant='success' type='submit' style={{ width: '7rem' }}>
                    Modificar
                </Button>{'  '}

                <Link to={"/gestionusuarios"}>
                    <Button variant='danger' type='Volver' className='w-4' style={{ width: '7rem' }}>
                        Cancelar
                    </Button>
                </Link>
            </Form>
        </Container>
    );
}

export default VerUnUsuario;