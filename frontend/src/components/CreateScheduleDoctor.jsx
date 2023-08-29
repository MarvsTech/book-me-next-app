import React, {useState} from 'react'
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useAuth } from '../config/UserContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const CreateScheduleDoctor = ({show, handleCloseModal}) => {
    const {currentUser: { token }} = useAuth();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [scheduleDate, setScheduleDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();

        formData.append('title', title);
        formData.append('description', description);
        formData.append('schedule_date', scheduleDate);
        formData.append('time_start', startTime);
        formData.append('time_end', endTime);

        try {
            const response = await axios.post('http://localhost:8000/api/doctor/schedule', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            if (response.status === 200) {
                setTitle('');
                setDescription('');
                setScheduleDate('');
                setStartTime('');
                setEndTime('');

                Swal.fire({ 
                    icon: 'success',
                    title: 'Success',
                    text: 'DoctorSchedule created successfully!',
                });

            } else {
                console.error('Request was not successful. Status code:', response.status);
            }
        } catch (error) {
            console.error('Error creating doctor:', error);
        }
    };

  return (
    <div >
        <Modal className='create-sched-modal' show={show} onHide={handleCloseModal}>
            <Modal.Header className='create-sched-header' closeButton>
                <div>Create Schedule</div>
            </Modal.Header>
            <Modal.Body className='booking-body create-sched-body'>
                <Container fluid>
                    <Form onSubmit={e => onSubmit(e)}>
                        <Container fluid>
                            <Row>
                                <Form.Label>Title</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={title} 
                                    onChange={e => setTitle(e.target.value)} 
                                    placeholder="enter schedule title"
                                />
                            </Row>
                            <Row>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea" 
                                    value={description} 
                                    onChange={e => setDescription(e.target.value)} 
                                    placeholder="Description" 
                                    style={{ height: '100px', width: '100%' }}
                                />
                            </Row>
                            <Row>
                                <Form.Label>Choose Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder='Choose date'
                                    value={scheduleDate} 
                                    onChange={e => setScheduleDate(e.target.value)} 
                                />
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Select value={startTime} onChange={(e) => setStartTime(e.target.value)}>
                                        <option>Choose Time</option>
                                        <option value="08:00:00">08:00</option>
                                        <option value="09:00:00">09:00</option>
                                        <option value="10:00:00">10:00</option>
                                        <option value="11:00:00">11:00</option>
                                        <option value="12:00:00">12:00</option>
                                        <option value="13:00:00">01:00</option>
                                        <option value="14:00:00">02:00</option>
                                        <option value="15:00:00">03:00</option>
                                        <option value="16:00:00">04:00</option>
                                        <option value="17:00:00">05:00</option>
                                        <option value="18:00:00">06:00</option>
                                    </Form.Select>
                                </Col>
                                 <Col>
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Select value={endTime} onChange={(e) => setEndTime(e.target.value)}>
                                        <option>Choose Time</option>
                                        <option value="08:00:00">08:00</option>
                                        <option value="09:00:00">09:00</option>
                                        <option value="10:00:00">10:00</option>
                                        <option value="11:00:00">11:00</option>
                                        <option value="12:00:00">12:00</option>
                                        <option value="13:00:00">01:00</option>
                                        <option value="14:00:00">02:00</option>
                                        <option value="15:00:00">03:00</option>
                                        <option value="16:00:00">04:00</option>
                                        <option value="17:00:00">05:00</option>
                                        <option value="18:00:00">06:00</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Container>
                        
                        <div className='create-sched-btn'>
                            <Button type='submit' onClick={handleCloseModal}>Create Schedule</Button>
                        </div>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default CreateScheduleDoctor
