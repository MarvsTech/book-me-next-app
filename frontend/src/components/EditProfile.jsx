import React, { useEffect, useRef, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import camera from '../images/camera.svg'
import woman from '../images/woman.svg'

const EditProfile = ({data}) => {

    const navigate = useNavigate();

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

    }, [data])

   // chatgpt
    
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

   const onSubmit = e => {
    e.preventDefault();

    navigate('/settings');

    setUsername('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setContact('');
    setEmail('');    
   }

  return (
    <div className='table-content-wrapper'>
        <div className='table-header'>
            <h1 className='title-without-btn'>Edit Profile</h1>
        </div>

        <Container className='table-content'>
            <Form className='form-container' onSubmit={e => onSubmit(e)}>
                <div className='change-profile'>
                    <div style={{ display: 'inline-block', cursor: 'pointer' }} className='change-profile-img'>
                        <img
                        src={woman}
                        alt="Preview"
                        width="40"
                        height="40"
                        onClick={() => document.getElementById('fileInput').click()}
                        />
                    </div>
                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>

                <div className='form-content'>
                    <div className='left-col'>
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
                    </div>
                    
                    <div className='right-col'>
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
                    </div>
                </div>
                
                <div className='horizontal-line'></div>
                
                <div className='btn-container'>
                    <Button type='submit'>Update Profile</Button>
                </div>
                
            </Form>
        </Container>
    </div>
  )
}

export default EditProfile
