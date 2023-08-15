import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from "react-router-dom";

import DoctorBackground from '../images/doctor-background.svg';
import Logo from '../images/booking-logo.svg';

const Login = () => {
  return (
    <div className='login-container-wrapper'>
        <Container>
            <Row>
                <Col md={6}>
                    <div className="logo-brand">
                        <img src={Logo} alt="Logo" />
                        <h1>Book Me Next</h1>
                    </div>
                    <p>Sign in to your account</p>
                    <Form>
                        <Form.Group className="position-relative" style={{ margin: '40px 0' }}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            type="input"
                            required
                            name="email"
                            placeholder='Enter your Email'
                            />
                        </Form.Group>
                        <Form.Group className="position-relative mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type="password"
                            required
                            name="password"
                            placeholder='Enter your Password'
                            />
                        </Form.Group>
                        <p>Dont have an account? <Link to="/register">Register</Link></p>
                        <div className='btn-submit'>
                            <Button type="submit">Submit form</Button>
                        </div>
                    </Form>
                </Col>
                <Col md={6}>
                    <img src={DoctorBackground} alt="Doctor Background" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Login