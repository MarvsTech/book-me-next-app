import React, { useState } from 'react';
import {Modal, Form, Button, Container, Row, Col} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import woman from '../images/woman.svg'
import { FiUserPlus, FiCamera } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import { useAuth } from '../config/UserContext';
import axios from 'axios';

const DoctorModals = ({showAdd, onCloseAdd}) => {
    const {currentUser: {
        firstname, lastname, middlename, roleId, token,
    }} = useAuth();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [MI, setMI] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [roomNumber, setRoomNumber] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('profile_image', selectedFile);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('contact', contact);
        formData.append('email', email);
    
        try {
            const response = await axios.post('http://localhost:8000/api/admin/doctor', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            setUsername('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setContact('');
            setEmail('');
            setSelectedFile(null);

            onCloseAdd();

            console.log(response.data);
        } catch (error) {
            console.error('Error creating doctor:', error);
        }
    };
    
    return (
        <Container>
            <Modal show={showAdd} onHide={onCloseAdd}>
                <Modal.Header closeButton className='add-modal-header'></Modal.Header>
                
                <Modal.Body>
                    <Form className='modal-form-container' onSubmit={e => onSubmit(e)}>
                        <div className='change-profile'>
                            <div style={{ display: 'inline-block', cursor: 'pointer', position: 'relative' }} className='change-profile-img'>
                                <img src={woman} alt="Preview" width="40" height="40" onClick={() => document.getElementById('fileInput').click()} />
                                <span className="camera-badge">
                                    <FiCamera />
                                </span>
                            </div>
                            <input id="fileInput" type="file" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
                        </div>

                        <div className='modal-form-content'>
                            <Container>
                                <Row>
                                    <Col md={5}>
                                        <FloatingLabel controlId="floatingInputFirstname" label="Firstname" className="mb-3">
                                            <Form.Control type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Firstname"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={5}>
                                        <FloatingLabel controlId="floatingInputLastname" label="Lastname" className="mb-3">
                                            <Form.Control type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Lastname"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={2}>
                                        <FloatingLabel controlId="floatingInputMI" label="MI" className="mb-3">
                                            <Form.Control type="text" value={MI} onChange={e => setMI(e.target.value)} placeholder="MI"/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <FloatingLabel controlId="floatingInputSpecialization" label="Specialization" className="mb-3">
                                            <Form.Control type="text" value={specialization} onChange={e => setSpecialization(e.target.value)} placeholder="Specialization"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={4}>
                                        <FloatingLabel controlId="floatingInputRoomNumber" label="Room Number" className="mb-3">
                                            <Form.Control type="text" value={roomNumber} onChange={e => setRoomNumber(e.target.value)} placeholder="RoomNumber"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={4}>
                                        <FloatingLabel controlId="floatingInputContactNumber" label="Contact Number" className="mb-3">
                                            <Form.Control type="text" value={contactNumber} onChange={e => setContactNumber(e.target.value)} placeholder="ContactNumber"/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FloatingLabel controlId="floatingTextareaAddress" label="Address" className="mb-3">
                                            <Form.Control as="textarea" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" style={{ height: '100px', width: '100%' }}/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        
                        <div className='btn-container'>
                            <Button type='submit' onSubmit={onCloseAdd}> <FiUserPlus /> Doctor</Button>
                        </div>
                        
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default DoctorModals
