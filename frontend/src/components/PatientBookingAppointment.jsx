import React, {useState, useEffect} from 'react'
import { Form, Modal, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../config/UserContext';
import Swal from 'sweetalert2';

const PatientBookingAppointment = ({show, handleCloseModal}) => {
  const { currentUser } = useAuth();
  const [doctorScheduleDates, setDoctorScheduleDates] = useState([]);
  const [doctorScheduleTimes, setDoctorScheduleTimes] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [selectedDoctorScheduleDate, setSelectedDoctorScheduleDate] = useState('');
  const [selectedDoctorScheduleTime, setSelectedDoctorScheduleTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('doctor_schedule_date_id', selectedDoctorScheduleDate);
    formData.append('doctor_schedule_time_id', selectedDoctorScheduleTime);
    formData.append('doctor_id', selectedDoctor);
    formData.append('patient_id', currentUser.id);
    formData.append('status_id', 2);
    formData.append('remarks', 'Pending');
  
    try {
      const response = await axios.post(
        'http://localhost:8000/api/patient/appointment',
        formData,
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      if (response.status === 200) {
        setSelectedDoctorScheduleDate('');
        setSelectedDoctorScheduleTime('');
        setSelectedDoctor('');
  
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Appointment created successfully!',
        });
      } else {
        console.error('Request was not successful. Status code:', response.status);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to create appointment.',
        });
      }
    } catch (error) {
      console.error('Error creating appointment:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while creating the appointment.',
      });
    }
  };
  

  const handleSelectDoctorScheduleDate = (event) => {
    setSelectedDoctorScheduleDate(event.target.value);
  };

  const handleSelectDoctor = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleSelectDoctorScheduleTime = (event) => {
    setSelectedDoctorScheduleTime(event.target.value);
  };

  useEffect(() => {
    if (currentUser && currentUser.token) {
      axios.get('http://localhost:8000/api/patient/doctor/schedule/date', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        setDoctorScheduleDates(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.token) {
      axios.get('http://localhost:8000/api/patient/doctor/schedule/time', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        setDoctorScheduleTimes(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.token) {
      axios.get('http://localhost:8000/api/patient/doctor/all', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        setDoctors(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    }
  }, [currentUser]);

  return (
    <Modal show={show} onHide={handleCloseModal} className='booking-modal-content'>
        <Modal.Header closeButton className='booking-header'>
          <h1>Book Appointment</h1>
        </Modal.Header>
        <Modal.Body className='booking-body'>
          <Container fluid>
            <Form className='booking-form' onSubmit={e => onSubmit(e)}>
              <Row className='booking-date-time'>
                <Col className='date-picker'>
                  <Form.Label>Booking Date:</Form.Label>
                  <Form.Select value={selectedDoctorScheduleDate} onChange={handleSelectDoctorScheduleDate}>
                    <option>Choose Time</option>
                    {doctorScheduleDates.map(doctorScheduleDate => (
                      <option key={doctorScheduleDate.id} value={doctorScheduleDate.id}>{doctorScheduleDate.date_available}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col className='time-picker'>
                  <Form.Label>Booking Time:</Form.Label>
                  <Form.Select value={selectedDoctorScheduleTime} onChange={handleSelectDoctorScheduleTime}>
                    <option>Choose Time</option>
                    {doctorScheduleTimes.map(doctorScheduleTime => (
                      <option key={doctorScheduleTime.id} value={doctorScheduleTime.id}>{doctorScheduleTime.time_available}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              <Row className='choose-doctor'>
                <Form.Label>Doctor:</Form.Label>
                <Form.Select value={selectedDoctor} onChange={handleSelectDoctor}>
                    <option>Choose your Doctor</option>
                    {doctors.map(doctor => (
                      <option key={doctor.id} value={doctor.id}>{doctor.lastname}, {doctor.firstname} {doctor.middlename}</option>
                    ))}
                  </Form.Select>
              </Row>

              <Row>
                <div className='book-btn'>
                  <Button type='submit' onClick={handleCloseModal}>Book Appointment</Button>
                </div>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
    </Modal>
  )
}

export default PatientBookingAppointment
