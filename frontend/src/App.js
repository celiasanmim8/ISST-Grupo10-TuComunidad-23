import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CrearNoticias from './components/Noticias/CrearNoticias';
import VerNoticias from './components/Noticias/VerNoticias';
import Sidebar from './components/Noticias/Sidebar';
import VerSugerencias from './components/Sugerencias/VerSugerencias';
import CrearSugerencias from './components/Sugerencias/CrearSugerencias';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import VerContacto from './components/Contacto/VerContacto';
import CrearComentario from './components/Comentarios/CrearComentario';
import UnaNoticia from './components/Noticias/UnaNoticia';
import VerComentario from './components/Comentarios/VerComentario';



function App() {
    const [noticiaslist, setNoticiaslist] = useState([]);
    const [sugerenciaslist, setSugerenciaslist] = useState([]);
    const [comentariolist, setComentariolist] = useState([]);



    useEffect(() => {
        const formatDate = (isoDateString) => {
            const date = new Date(isoDateString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        };

        const fetchNoticias = async () => {
            const response = await fetch('http://localhost:8080/noticias');
            const noticiasData = await response.json();

            // Format the date for each fetched item
            const formattedNoticiasData = noticiasData.map((noticiaItem) => {
                return {
                    ...noticiaItem,
                    fechaCreacion: formatDate(noticiaItem.fechaCreacion),
                };
            });

            setNoticiaslist(formattedNoticiasData);
        };

        const fetchSugerencias = async () => {
            const response = await fetch('http://localhost:8080/sugerencias');
            const sugerenciasData = await response.json();

            // Format the date for each fetched item
            const formattedSugerenciasData = sugerenciasData.map((sugerenciaItem) => {
                return {
                    ...sugerenciaItem,
                    fechaCreacion: formatDate(sugerenciaItem.fechaCreacion),
                };
            });

            setSugerenciaslist(formattedSugerenciasData);
        };



        const fetchComentario = async () => {
            const response = await fetch('http://localhost:8080/sugerencias/responder');
            const comentarioData = await response.json();

            // Format the date for each fetched item
            const formattedComentarioData = comentarioData.map((comenatrioItem) => {
                return {
                    ...comenatrioItem
                };
            });

            setComentariolist(formattedComentarioData);
        };

        fetchNoticias();

        fetchSugerencias();

        fetchComentario();

        /* Para refrescar periódicamente */
        const intervalNoticias = setInterval(fetchNoticias, 10000);
        const intervalSuerencias = setInterval(fetchSugerencias, 10000);
        const intervalComentario = setInterval(fetchComentario, 10000);
        return () => {
            clearInterval(intervalNoticias);
            clearInterval(intervalSuerencias);
            clearInterval(intervalComentario);
        };
    }, []);






    return (
        <div className='contenedor-flexbox'>
                <Sidebar/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/noticias" />}></Route>
                    <Route path="/noticias" element={<VerNoticias noticiaslist={noticiaslist} />} />
                    <Route path="/noticias/:noticiaId" element={<UnaNoticia noticiaslist={noticiaslist} />} />
                    <Route path="/noticias/crear" element={<CrearNoticias />} />
                    <Route path="/sugerencias" element={<VerSugerencias sugerenciaslist={sugerenciaslist} comentariolist={comentariolist} />} />
                    <Route path="/sugerencias/crear" element={<CrearSugerencias />} />
                    <Route path="/sugerencias/:sugerenciaId" element={<CrearComentario />} />
                    <Route path="/contacto" element={<VerContacto />} />
                </Routes>
        </div>
    );
}

export default App;