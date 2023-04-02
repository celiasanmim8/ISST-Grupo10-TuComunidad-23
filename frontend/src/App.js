import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CrearNoticias from './components/Noticias/CrearNoticias';
import VerNoticias from './components/Noticias/VerNoticias';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
    const [noticiaslist, setNoticiaslist] = useState([]);

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
    
        fetchNoticias();
    
        /* Para refrescar periódicamente */
        const interval = setInterval(fetchNoticias, 10000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>tuComunidad</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/noticias">Noticias</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Navigate replace to="/noticias" />}></Route>
                <Route path="/noticias" element={<VerNoticias noticiaslist={noticiaslist} />} />
                <Route path="/noticias/crear" element={<CrearNoticias />} />
            </Routes>
        </div>






        /*
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/noticias">Noticias</Link>
                    </li>
                    <li>
                        <Link to="/sugerencias">Sugerencias</Link>
                    </li>
                </ul>
            </nav>

        </div>
        */


    );
}

export default App;