import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import { Link } from 'react-router-dom';
import './Signup.css'
const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Row>
                <Col md={6} className="signup__form--container">
                    <Form style={{ width: "100%" }}>
                        <h1>Create an account</h1>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Button type="submit">Sign Up</Button>
                        </Form.Group>
                        <p>have an account?<Link to='/login'>Login Here</Link></p>
                    </Form>
                </Col>
                <Col md={6} className='signup__image--container'></Col>
            </Row>
        </Container>
    )
}

export default Signup