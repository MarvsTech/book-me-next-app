import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import RegisterBackground from '../images/register.svg';
import Logo from '../images/booking-logo.svg';

const Register = () => {
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [validationError,setValidationError] = useState({});

    const createUser = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('middlename', middlename);
        formData.append('email', email);
        formData.append('contact_number', contactNumber);
        formData.append('password', password);
        formData.append('confirm_password', confirmPassword);

        await axios.post(`http://localhost:8000/api/signup`, formData).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            navigate("/user/login")
            }).catch(({response}) => {

            if(response.status===422){
                setValidationError(response.data.errors)
            }else{
                Swal.fire({
                text:response.data.message,
                icon:"error"
                })
            }
        });
    }

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
                        <Form onSubmit={createUser}>
                            <Row>
                                <Col md={5}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control id="floatingfirstname" type="text" name="firstname" value={firstname} onChange={(event)=>{setFirstname(event.target.value)}}/>
                                        <label htmlFor="floatingFirstname">Firstname</label>
                                    </Form.Floating>
                                </Col>
                                <Col md={5}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control id="floatingLastname" type="text" name="lastname" value={lastname} onChange={(event)=>{setLastname(event.target.value)}}/>
                                        <label htmlFor="floatingLastname">Lastname</label>
                                    </Form.Floating>
                                </Col>
                                <Col md={2}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control id="floatingMI" type="text" name="middlename" value={middlename} onChange={(event)=>{setMiddlename(event.target.value)}}/>
                                        <label htmlFor="floatingMI">M.I.</label>
                                    </Form.Floating>
                                </Col>
                            </Row>
                            <Form.Floating className="mb-3">
                                <Form.Control id="floatingContactNumber" type="text" placeholder="Contact Number" name="contact_number" value={contactNumber} onChange={(event)=>{setContactNumber(event.target.value)}}/>
                                <label htmlFor="floatingContactNumber">Contact Number</label>
                            </Form.Floating>
                            <FloatingLabel controlId="floatingTextarea2" label="Address" className="mb-3">
                                <Form.Control as="textarea" placeholder="Address" name="address" style={{ height: '100px' }} value={address} onChange={(event)=>{setAddress(event.target.value)}}/>
                            </FloatingLabel>
                            <Form.Floating className="mb-3">
                                <Form.Control id="floatingEmail" type="email" placeholder="Email" name="email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                                <label htmlFor="floatingEmail">Email</label>
                            </Form.Floating>
                            <Row>
                                <Col md={6}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control id="floatingPassword" type="password" name="password" placeholder="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                                        <label htmlFor="floatingPassword">Password</label>
                                    </Form.Floating>
                                </Col>
                                <Col md={6}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control id="floatingConfirmPassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
                                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                                    </Form.Floating>
                                </Col>
                            </Row>

                            <p>Do you have an account? <Link to="/user/login">Login</Link></p>
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