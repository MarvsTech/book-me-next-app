import React, { useState } from 'react';
import {Modal, Form, Button, Container, Row, Col} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import woman from '../images/woman.svg'
import { FiUserPlus, FiCamera } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import { useAuth } from '../config/UserContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const DoctorModals = ({showAdd, onCloseAdd}) => {
    const {currentUser: { token }} = useAuth();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [middlename, setMI] = useState("");
    const [email, setEmail] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [room_number, setRoomNumber] = useState("");
    const [contact_number, setContactNumber] = useState("");
    const [address, setAddress] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('profile', selectedFile);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('middlename', middlename);
        formData.append('email', email);
        formData.append('specialization', specialization);
        formData.append('room_number', room_number);
        formData.append('contact_number', contact_number);
        formData.append('address', address);

        try {
            const response = await axios.post('http://localhost:8000/api/admin/doctor', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setFirstName('');
                setLastName('');
                setMI('');
                setSpecialization('');
                setRoomNumber('');
                setContactNumber('');
                setAddress('');
                setSelectedFile(null);
                onCloseAdd();
                Swal('Success', 'Doctor created successfully!', 'success');
            } else {
                console.error('Request was not successful. Status code:', response.status);
            }
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
                                            <Form.Control type="text" value={firstname} onChange={e => setFirstName(e.target.value)} placeholder="Firstname"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={5}>
                                        <FloatingLabel controlId="floatingInputLastname" label="Lastname" className="mb-3">
                                            <Form.Control type="text" value={lastname} onChange={e => setLastName(e.target.value)} placeholder="Lastname"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={2}>
                                        <FloatingLabel controlId="floatingInputMI" label="MI" className="mb-3">
                                            <Form.Control type="text" value={middlename} onChange={e => setMI(e.target.value)} placeholder="MI"/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FloatingLabel controlId="floatingInputSpecialization" label="Specialization" className="mb-3">
                                            <Form.Control type="text" value={specialization} onChange={e => setSpecialization(e.target.value)} placeholder="Specialization"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6}>
                                        <FloatingLabel controlId="floatingInputRoomNumber" label="Room Number" className="mb-3">
                                            <Form.Control type="text" value={room_number} onChange={e => setRoomNumber(e.target.value)} placeholder="RoomNumber"/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FloatingLabel controlId="floatingInputContactNumber" label="Contact Number" className="mb-3">
                                            <Form.Control type="text" value={contact_number} onChange={e => setContactNumber(e.target.value)} placeholder="ContactNumber"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col md={6}>
                                        <FloatingLabel controlId="floatingInputEmail" label="Email Address" className="mb-3">
                                            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@doe.com"/>
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
