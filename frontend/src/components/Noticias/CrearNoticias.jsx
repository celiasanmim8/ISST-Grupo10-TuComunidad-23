import React, { useState } from 'react';
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...newsItem,
                    adjunto: adjuntoBytes ? Array.from(adjuntoBytes) : null,
                }),
            };
            
            await fetch('http://localhost:8080/noticias', requestOptions);
            setTitulo('');
            setDescripcion('');
            setAdjunto(null);
            navigate('/noticias')
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
        <div>
            <h2>Crear nueva noticia</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo">Título:</label>
                <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <label htmlFor="descripcion">Descripción:</label>
                <textarea
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                
                <label htmlFor="adjunto">Adjunto (optional):</label>
                <input
                    type="file"
                    id="adjunto"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <button type="submit">Submit</button>
                <Link to={"/"}><button>Cancelar</button></Link>
            </form>
        </div>
    );
};

export default CreateNews;