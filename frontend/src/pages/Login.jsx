import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

import DoctorBackground from '../images/doctor-background.svg';
import Logo from '../images/booking-logo.svg';

import UserProvider, { useAuth } from '../config/UserContext';

const Login = ({setUserInfo}) => {
    const { setCurrentUser } = useAuth();

    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('data.data.token', JSON.stringify(items));
    }, [items]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationError, setValidationError] = useState({});

    const loginUser = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);
        const {data: {data}} = await axios.post(`http://localhost:8000/api/login`, formData);

        localStorage.setItem('userToken', data.token);

        if (data) {
            setCurrentUser(data)
            navigate("/doctor/dashboard");

            // Swal.fire({
            //     icon: "success",
            //     title: "Access Granted",
            //     text: data.message
            // });

            // switch (data.roleId) {
            //     case 1:
            //         navigate("/admin/dashboard");
            //         break;
            //     case 2:
            //         navigate("/doctor/dashboard");
            //         break;
            //     case 3:
            //         navigate("/patient/dashboard");
            //         break;
            //     default:
            //         navigate("/user/login");
            // }
        } else {
            // Swal.fire({
            //     icon: "success",
            //     title: "Invalid Credentials",
            //     text: data.message
            // });
        }
    }

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
                        <Form onSubmit={loginUser}>
                            <Form.Group className="position-relative" style={{ margin: '40px 0' }}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="input"
                                    required
                                    name="email"
                                    placeholder='Enter your Email'
                                    value={email}
                                    onChange={(event) => { setEmail(event.target.value) }}
                                />
                            </Form.Group>
                            <Form.Group className="position-relative mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    required
                                    name="password"
                                    placeholder='Enter your Password'
                                    value={password}
                                    onChange={(event) => { setPassword(event.target.value) }}
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