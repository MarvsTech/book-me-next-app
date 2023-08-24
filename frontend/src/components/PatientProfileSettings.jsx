import React, { useState, useEffect } from 'react'
import { Modal, Container, Form, Row, Col, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useLocation } from 'react-router';

const PatientProfileSettings = ({show, handleCloseModal, data}) => {

    // useState, useEffect, and onSubmit function for user data start
    const [firstname, setFirstname] = useState(""); 
    const [lastname, setLastname] = useState("");
    const [middlename, setMI] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [room_number, setRoomNumber] = useState("");
    const [email, setEmail] = useState("");
    const [contact_number, setContactNumber] = useState("");
    const [address, setAddress] = useState("");

    const location = useLocation();

    const onSubmit = e => {
      e.preventDefault();
    }

    return (
        <Modal className='edit-profile-modal' show={show} onHide={handleCloseModal}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='booking-body'>
                <Container>
                    <Form onSubmit={e => onSubmit(e)}>
                        <Container>
                            <Row>
                                <Col md={5}>
                                    <FloatingLabel controlId="floatingInputFirstname" label="Firstname" className="mb-3">
                                        <Form.Control type="text" value={firstname} onChange={e => setFirstname(e.target.value)} placeholder=""/>
                                    </FloatingLabel>
                                </Col>
                                <Col md={5}>
                                    <FloatingLabel controlId="floatingInputLastname" label="Lastname" className="mb-3">
                                        <Form.Control type="text" value={lastname} onChange={e => setLastname(e.target.value)} placeholder=""/>
                                    </FloatingLabel>
                                </Col>
                                <Col md={2}>
                                    <FloatingLabel controlId="floatingInputMI" label="MI" className="mb-3">
                                        <Form.Control type="text" value={middlename} onChange={e => setMI(e.target.value)} placeholder=""/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                {
                                    (location.pathname === '/doctor' || location.pathname === '/doctor/appointments') ?
                                        <>
                                            <Col md={6}>
                                                <FloatingLabel controlId="floatingInputSpecialization" label="Specialization" className="mb-3">
                                                    <Form.Control type="text" value={specialization} onChange={e => setSpecialization(e.target.value)} placeholder=""/>
                                                </FloatingLabel>
                                            </Col>
                                            <Col md={6}>
                                                <FloatingLabel controlId="floatingInputRoomNumber" label="Room Number" className="mb-3">
                                                    <Form.Control type="text" value={room_number} onChange={e => setRoomNumber(e.target.value)} placeholder=""/>
                                                </FloatingLabel>
                                            </Col>
                                        </>
                                    :
                                        null
                                }
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FloatingLabel controlId="floatingInputContactNumber" label="Contact Number" className="mb-3">
                                        <Form.Control type="text" value={contact_number} onChange={e => setContactNumber(e.target.value)} placeholder=""/>
                                    </FloatingLabel>
                                </Col>
                                <Col md={6}>
                                    <FloatingLabel controlId="floatingInputEmail" label="Email Address" className="mb-3">
                                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder=""/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FloatingLabel controlId="floatingTextareaAddress" label="Address" className="mb-3">
                                        <Form.Control as="textarea" value={address} onChange={e => setAddress(e.target.value)} placeholder="" style={{ height: '100px', width: '100%' }}/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </Container>

                        <Button type='submit' onClick={handleCloseModal}>Update Profile</Button>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default PatientProfileSettings
