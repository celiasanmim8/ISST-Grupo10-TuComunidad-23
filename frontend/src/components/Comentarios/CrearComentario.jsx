import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Container } from 'react-bootstrap';
import useRequireAuth from '../Login/useRequireAuth';

const CrearSugerencias = () => {
    useRequireAuth();
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();
    let{sugerenciaId} = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (descripcion.trim()) {
            const sugerenciasItem = {
                descripcion,
                sugerenciaId: sugerenciaId,
                // TODO: cambiar cuando se establezca sesiones de usuario
                userId: 1,
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token},
                body: JSON.stringify({
                    ...sugerenciasItem
                }),
            };
            
            await fetch('http://localhost:8080/sugerencias/responder', requestOptions);
            setDescripcion('');
            navigate('/sugerencias')
        }
    };


    return (
        <Container className='mx-4 my-4'>
            <h2>Responder a la sugerencia</h2>
            <br/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label className='h5'>Su respuesta</Form.Label>
                    <Form.Control as="textarea" rows={2} onChange={(e) => setDescripcion(e.target.value)}></Form.Control>
                </Form.Group>
                <Button variant='success' type='submit' style={{ width: '7rem' }}>
                    Responder
                </Button>{'  '}
                <Link to={"/sugerencias"}>
                    <Button variant='danger' type='Volver' className='w-4' style={{ width: '7rem' }}>
                        Cancelar
                    </Button>
                </Link>
            </Form>
        </Container>
    );
};

export default CrearSugerencias;