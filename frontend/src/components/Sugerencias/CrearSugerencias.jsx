import React, { useState } from 'react';
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
        <div>
            <h2>Crear nueva sugerencia</h2>
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
                
                <button type="submit">Submit</button>
                <Link to={"/sugerencias"}><button>Cancelar</button></Link>
            </form>
        </div>
    );
};

export default CrearSugerencias;