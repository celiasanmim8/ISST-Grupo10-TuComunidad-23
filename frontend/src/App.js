import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import CrearNoticias from './components/Noticias/CrearNoticias';
import VerNoticias from './components/Noticias/VerNoticias';
import Sidebar from './components/Noticias/Sidebar';
import VerSugerencias from './components/Sugerencias/VerSugerencias';
import CrearSugerencias from './components/Sugerencias/CrearSugerencias';
import VerJuntas from './components/Juntas/VerJuntas';
import CrearJunta from './components/Juntas/CrearJunta';
import './App.css';
import VerContacto from './components/Contacto/VerContacto';
import CrearComentario from './components/Comentarios/CrearComentario';
import UnaNoticia from './components/Noticias/UnaNoticia';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import UserService from './services/user.service';
import { useRef } from 'react';

function App() {
    const location = useLocation();
    const [noticiaslist, setNoticiaslist] = useState([]);
    const [sugerenciaslist, setSugerenciaslist] = useState([]);
    const [comentariolist, setComentariolist] = useState([]);
    const [juntaslist, setJuntaslist] = useState([]);
    const user = useRef(null);

    useEffect(() => {
        if (!user.current || (JSON.parse(localStorage.getItem('user').token !== user.current.token))) {
            user.current = JSON.parse(localStorage.getItem('user'));
        }

        if (user.current && user.current.token) {
            const formatDate = (isoDateString) => {
                const date = new Date(isoDateString);
                const day = String(date.getDate()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
            };
    
            const fetchNoticias = async () => {
                const noticiasData = await UserService.getNoticias();
                const formattedNoticiasData = noticiasData.map((noticiaItem) => {
                    return {
                        ...noticiaItem,
                        fechaCreacion: formatDate(noticiaItem.fechaCreacion),
                    };
                });
                setNoticiaslist(formattedNoticiasData);
            };
    
            const fetchSugerencias = async () => {
                const sugerenciasData = await UserService.getSugerencias();
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
                const comentarioData = await UserService.getComentarios();
                // Format the date for each fetched item
                const formattedComentarioData = comentarioData.map((comenatrioItem) => {
                    return {
                        ...comenatrioItem
                    };
                });
                setComentariolist(formattedComentarioData);
            };

            const fetchJuntas = async () => {
                const juntasData = await UserService.getJuntas();
                // Format the date for each fetched item
                const formattedJuntasData = juntasData.map((juntaItem) => {
                    return {
                        ...juntaItem,
                        fechaCreacion: formatDate(juntaItem.fechaCreacion),
                    };
                });
                setJuntaslist(formattedJuntasData);
            };
    
            fetchNoticias();
            fetchSugerencias();
            fetchComentario();
            fetchJuntas();
            const intervalNoticias = setInterval(fetchNoticias, 10000);
            const intervalSuerencias = setInterval(fetchSugerencias, 10000);
            const intervalComentario = setInterval(fetchComentario, 10000);
            const intervalJuntas = setInterval(fetchJuntas, 10000);
            return () => {
                clearInterval(intervalNoticias);
                clearInterval(intervalSuerencias);
                clearInterval(intervalComentario);
                clearInterval(intervalJuntas);
            };
        }
    }, [location]);

    return (
        <div className='contenedor-flexbox'>
                {user.current && user.current.token && <Sidebar/>}
                <Routes>
                    <Route path="/" element={<Navigate replace to="/noticias" />}></Route>
                    <Route path="/noticias" element={<VerNoticias noticiaslist={noticiaslist} />} />
                    <Route path="/noticias/:noticiaId" element={<UnaNoticia noticiaslist={noticiaslist} />} />
                    <Route path="/noticias/crear" element={<CrearNoticias />} />
                    <Route path="/sugerencias" element={<VerSugerencias sugerenciaslist={sugerenciaslist} comentariolist={comentariolist} />} />
                    <Route path="/sugerencias/crear" element={<CrearSugerencias />} />
                    <Route path="/sugerencias/:sugerenciaId" element={<CrearComentario />} />
                    <Route path="/juntas" element={<VerJuntas juntaslist={juntaslist}/>} />
                    <Route path="/juntas/crear" element={<CrearJunta />} />
                    <Route path="/contacto" element={<VerContacto />} />
                    <Route path="/login" element={<Login location={location}/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/*" element={<Navigate to="/noticias"/>} />
                </Routes>
        </div>
    );
}

export default App;