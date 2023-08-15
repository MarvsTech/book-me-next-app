import React from 'react'
import {Modal, Form, Button, Container, Row, Col} from 'react-bootstrap'
import { useState } from 'react';
import woman from '../images/woman.svg'
import { useLocation } from 'react-router-dom';

const AddModals = ({showAdd, onCloseAdd}) => {

    const location = useLocation();

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

   const onSubmit = e => {
    e.preventDefault();

    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setContact('');
    setEmail('');    
   }

  return (
    <Container>
        <Modal show={showAdd} onHide={onCloseAdd}>
            <Modal.Header closeButton className='add-modal-header'></Modal.Header>
            
            <Modal.Body>
                <Form className='modal-form-container' onSubmit={e => onSubmit(e)}>
                    <div className='change-profile'>
                        <div style={{ display: 'inline-block', cursor: 'pointer' }} className='change-profile-img'>
                            <img src={woman} alt="Preview" width="40" height="40" onClick={() => document.getElementById('fileInput').click()} />
                        </div>
                        <input id="fileInput" type="file" style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
                    </div>

                    <div className='modal-form-content'>
                        <Container>
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
                                        <Form.Control type='email' value={email} placeholder='Enter Contact' onChange={e => setEmail(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                        </Container>
                        
                    </div>
                    
                    <hr className='horizontal-line'></hr>
                    
                    <div className='btn-container'>
                        <Button type='submit' onSubmit={onCloseAdd}>Update Profile</Button>
                    </div>
                    
                </Form>
            </Modal.Body>
        </Modal>
    </Container>
  )
}

export default AddModals
