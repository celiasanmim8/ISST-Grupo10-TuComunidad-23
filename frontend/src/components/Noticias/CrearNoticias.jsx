import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const CreateNews = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [adjunto, setAdjunto] = useState(null);
    const navigate = useNavigate();

    const toByteArray = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = () => resolve(new Uint8Array(reader.result));
            reader.onerror = (error) => reject(error);
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (titulo.trim() && descripcion.trim()) {
            let adjuntoBytes = null;
            if (adjunto) {
                adjuntoBytes = await toByteArray(adjunto);
            }

            const newsItem = {
                titulo,
                descripcion,
                // TODO: cambiar cuando se establezca sesiones de usuario
                userId: 1,
                fechaCreacion: new Date().toISOString(),
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token},
                body: JSON.stringify({
                    ...newsItem,
                    adjunto: adjuntoBytes ? Array.from(adjuntoBytes) : null,
                }),
            };

            await fetch('http://localhost:8080/noticias', requestOptions);

            setTitulo('');
            setDescripcion('');
            setAdjunto(null);
            navigate('/noticias');
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setAdjunto(file);
        } else {
            setAdjunto(null);
        }
    };
    
    return (
        <Container className='mx-4 my-4'>
            <h2>Nueva noticia</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label className='h4'>Título</Form.Label>
                    <Form.Control as="textarea" rows={2} onChange={(e) => setTitulo(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label className='h4'>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={10} onChange={(e) => setDescripcion(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label className='h4'>Imágenes adjuntas</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange}></Form.Control>
                </Form.Group>

                <Button variant='success' type='submit' style={{ width: '7rem' }}>
                    Crear
                </Button>{'  '}

                <Link to={"/noticias"}>
                    <Button variant='danger' type='Volver' className='w-4' style={{ width: '7rem' }}>
                        Cancelar
                    </Button>
                </Link>
            </Form>
        </Container>
    );
};

export default CreateNews;