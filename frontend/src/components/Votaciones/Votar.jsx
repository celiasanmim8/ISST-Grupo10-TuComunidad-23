import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Container, Col} from 'react-bootstrap';
import useRequireAuth from '../Login/useRequireAuth';

const Votar = () => {
    useRequireAuth();
    const [vote, setVote] = useState('Abstencion');
    const navigate = useNavigate();
    let{juntaId} = useParams();



    const handleVote = (e) => {
        setVote(e.target.value);
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (vote.trim()) {
            const votosItem = {
                voto: vote,
                juntaId: juntaId,
                // TODO: cambiar cuando se establezca sesiones de usuario
                userId: 1,
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).token},
                body: JSON.stringify({
                    ...votosItem
                }),
            };
            
            await fetch('http://localhost:8080/juntas/votos', requestOptions);
            setVote('');
            navigate('/juntas')
        }
    };


    return (
        <Container className='mx-4 my-4'>
            <br/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                <Form>
                <h1>Elige una opción</h1>
                <Form.Group as={Col}>
                    <Form.Check
                    type="radio"
                    label="A favor"
                    name="voto"
                    value="A favor"
                    checked={vote === 'favor'}
                    onChange={handleVote}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Check
                    type="radio"
                    label="En contra"
                    name="voto"
                    value="En contra"
                    checked={vote === 'contra'}
                    onChange={handleVote}
                    />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Check
                    type="radio"
                    label="Abstención"
                    name="voto"
                    value="Abstencion"
                    checked={vote === 'abstencion'}
                    onChange={handleVote}
                    />
                </Form.Group>
                </Form>
                </Form.Group>
                <Button variant='success' type='submit' style={{ width: '7rem' }}>
                    Votar
                </Button>{'  '}
                <Link to={"/juntas"}>
                    <Button variant='danger' type='Volver' className='w-4' style={{ width: '7rem' }}>
                        Cancelar
                    </Button>
                </Link>
            </Form>
        </Container>
    );
};

export default Votar;