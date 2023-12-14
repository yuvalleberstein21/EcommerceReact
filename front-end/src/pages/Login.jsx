import React, { useState } from 'react'

import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

    }

    return (
        <Container>
            <Row>
                <Col md={6} className="login__form--container">
                    <Form style={{ width: "100%" }}>
                        <h1>Login to your account</h1>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Button type="submit">Login</Button>
                        </Form.Group>
                        <p>Don't have an account?<Link to='/signup'> Create account</Link></p>
                    </Form>
                </Col>
                <Col md={6} className='login__image--container'></Col>
            </Row>
        </Container>
    )
}

export default Login