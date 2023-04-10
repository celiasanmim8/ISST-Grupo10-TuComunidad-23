import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const CrearSugerencias = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (titulo.trim() && descripcion.trim()) {
            const sugerenciasItem = {
                titulo,
                descripcion,
                // TODO: cambiar cuando se establezca sesiones de usuario
                userId: 1,
                fechaCreacion: new Date().toISOString(),
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...sugerenciasItem
                }),
            };

            await fetch('http://localhost:8080/sugerencias', requestOptions);
            setTitulo('');
            setDescripcion('');
            navigate('/sugerencias')
        }
    };


    return (
        <Container className='mx-4 my-4'>
            <h2>Nueva sugerencia</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label className='h3'>Título</Form.Label>
                    <Form.Control as="textarea" rows={2} onChange={(e) => setTitulo(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label className='h3'>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={10} onChange={(e) => setDescripcion(e.target.value)}></Form.Control>
                </Form.Group>

                <Button variant='success' type='submit' style={{ width: '7rem' }} onClick={() => window.location.href="/sugerencias"}>
                    Crear
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