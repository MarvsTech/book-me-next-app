import React, { useState, useEffect } from 'react'
import { Modal, Container, Form, Row, Col, Button } from 'react-bootstrap';

const PatientProfileSettings = ({show, handleCloseModal, data}) => {

    // useState, useEffect, and onSubmit function for user data start
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {

        if (data) {
            setUsername(data.username);
            setPassword(data.password);
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setContact(data.contact);
            setEmail(data.email);
        }

    }, [])

    const onSubmit = e => {
      e.preventDefault();
    }
    // useState, useEffect, and onSubmit function for user data end

  return (
    <Modal className='edit-profile-modal' show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='booking-body'>
            <Container>
                <Form onSubmit={e => onSubmit(e)}>
                    <Row>
                        <Col className='left-col'>
                            <Form.Group className='form-group'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='text' value={username} placeholder='Enter Username' onChange={e => setUsername(e.target.value)} />
                            </Form.Group>

                            <Form.Group className='form-group'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type='text' value={firstName} placeholder='Enter First Name' onChange={e => setFirstName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className='form-group'>
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type='text' value={contact} placeholder='Enter Contact' onChange={e => setContact(e.target.value)} />
                            </Form.Group>
                        </Col>

                        <Col className='right-col'>
                            <Form.Group className='form-group'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' value={password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} />
                            </Form.Group>

                            <Form.Group className='form-group'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type='text' value={lastName} placeholder='Enter First Name' onChange={e => setLastName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className='form-group'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='text' value={email} placeholder='Enter Contact' onChange={e => setEmail(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='book-btn'>
                    <Button type='submit' onClick={handleCloseModal}>Update Profile</Button>
                    </Row>
                </Form>
            </Container>
        </Modal.Body>
    </Modal>
  )
}

export default PatientProfileSettings
