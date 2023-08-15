import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from "react-router-dom";

import RegisterBackground from '../images/register.svg';
import Logo from '../images/booking-logo.svg';

const Register = () => {
  return (
    <div className='register-container-wrapper'>
        <Container>
            <Row>
                <Col md={6}>
                    <div className="logo-brand">
                        <img src={Logo} alt="Logo" />
                        <h1>Book Me Next</h1>
                    </div>
                    <p>Register an account</p>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Floating className="mb-3">
                                    <Form.Control id="floatingFirstname" type="text" placeholder="Jane Doe"/>
                                    <label htmlFor="floatingFirstname">Firstname</label>
                                </Form.Floating>
                            </Col>
                            <Col md={6}>
                                <Form.Floating className="mb-3">
                                    <Form.Control id="floatingLastname" type="text" placeholder="Jane Doe"/>
                                    <label htmlFor="floatingLastname">Lastname</label>
                                </Form.Floating>
                            </Col>
                        </Row>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingContactNumber" type="contactNumber" placeholder="Contact Number"/>
                            <label htmlFor="floatingContactNumber">Contact Number</label>
                        </Form.Floating>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3">
                            <Form.Control
                            as="textarea"
                            placeholder="Address"
                            style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingEmail" type="email" placeholder="Email"/>
                            <label htmlFor="floatingEmail">Email</label>
                        </Form.Floating>
                        <Row>
                            <Col md={6}>
                                <Form.Floating className="mb-3">
                                    <Form.Control id="floatingPassword" type="password" placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </Form.Floating>
                            </Col>
                            <Col md={6}>
                                <Form.Floating className="mb-3">
                                    <Form.Control id="floatingConfirmPassword" type="password" placeholder="Confirm Password"/>
                                    <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                                </Form.Floating>
                            </Col>
                        </Row>

                        <p>Do you have an account? <Link to="/register">Login</Link></p>
                        <div className='btn-submit'>
                            <Button type="submit">Register Account</Button>
                        </div>
                    </Form>
                </Col>
                <Col md={6} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={RegisterBackground} alt="Doctor Background" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Register