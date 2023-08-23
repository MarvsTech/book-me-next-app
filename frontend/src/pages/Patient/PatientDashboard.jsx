import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import PatientProfile from '../../images/woman.svg';
import { Modal, Form } from 'react-bootstrap'
import AddButton from '../../images/add-btn.svg';
import PatientAppointmentTable from '../../components/PatientAppointmentTable';
import PatientCard from '../../components/PatientCard';

import { useAuth } from '../../config/UserContext';
import Calendar from '../../components/Calendar';
import PatientProfileSettings from '../../components/PatientProfileSettings';
import axios from 'axios';

const PatientDashboard = () => {
  const { currentUser } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [tableBody, setTableBody] = useState([]);

  useEffect(() => {
    if (currentUser && currentUser.id && currentUser.token) {
      axios.get('http://localhost:8000/api/patient/appointments/user/data', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        const responseData = response.data.data;
        const scheds = responseData.map((i) => {
          return {
            doctor: i.doctor,
            status: i.status_id,
            booking_date: i.doctor_schedule_time.time_available,
            booking_time: i.doctor_schedule_date.date_available,
          };
        });
        setAppointments(scheds);

        if (response.data && response.data.doctor) {
          setTableBody([response.data.doctor]);
        }
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    }
  }, [currentUser]);

  const [showModal1, setShowModal1] = useState(false);
  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const [showModal2, setShowModal2] = useState(false);
  const handleCloseModal2 = () => {
    
    setShowModal2(false);
    console.log(showModal2);
  }
  const handleShowModal2 = () => setShowModal2(true);

  const [showModal3, setShowModal3] = useState(false);
  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => setShowModal3(true);

  return (
    <div>
      <div className="patient-main-content">
        <Container>
          <Row>
            <Col md={6}>
              <div className="profile-container">
                <Row>
                  <Col md={6}>
                    <img src={PatientProfile} alt="" className='profile-container-profile'/>
                  </Col>
                  <Col md={6}>
                    <PatientCard currentUser={ currentUser } />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="book-appointment-container">
                <Row>
                  <Col md={12}>
                    <p>Book an appointment now!</p>
                    <img src={AddButton} alt="" className='Add Booking' onClick={handleShowModal1}/>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <Button variant="primary" onClick={handleShowModal2}>View appointments</Button>
              <Button onClick={handleShowModal3}>View Calendar</Button>
            </Col>
            <Col md={12}>
              <PatientAppointmentTable dataRow={appointments} />
            </Col>
          </Row>
        </Container>
      </div>
      <Modal show={showModal1} onHide={handleCloseModal1} className='booking-modal-content'>
        <Modal.Header closeButton className='booking-header'>
          <h1>Book Appointment</h1>
        </Modal.Header>
        <Modal.Body className='booking-body'>
          <Container fluid>
            <Form className='booking-form'>
              <Row className='booking-date-time'>
                <Col className='date-picker'>
                  <Form.Label>Booking Date:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder='Choose date'
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </Col>
                <Col className='time-picker'>
                  <Form.Label>Booking Time:</Form.Label>
                  <Form.Select>
                    <option>Choose Time</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className='choose-doctor'>
                <Form.Label>Doctor:</Form.Label>
                <Form.Select>
                  <option>Choose Doctor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Row>

              <Row className='book-btn'>
                <Button type='submit' onClick={handleCloseModal1}>Book Appointment</Button>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
      <PatientProfileSettings show={showModal2} handleCloseModal={handleCloseModal2} handleShowModal={handleShowModal2} data={tableBody[0]}/>
      <Modal show={showModal3} onHide={handleCloseModal3} className='view-calendar-modal'>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Calendar />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default PatientDashboard