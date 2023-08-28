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
import PatientBookingAppointment from '../../components/PatientBookingAppointment';
import PatientViewCalendar from '../../components/PatientViewCalendar';

const PatientDashboard = () => {
  const { currentUser } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [tableBody, setTableBody] = useState([]);

  useEffect(() => {
    if (currentUser && currentUser.id && currentUser.token) {
      axios.get('http://localhost:8000/api/patient/appointments/data', {
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
              <Button onClick={handleShowModal3}>View Calendar</Button>
            </Col>
            <Col md={12}>
              <PatientAppointmentTable dataRow={appointments} itemPerPage={9}/>
            </Col>
          </Row>
        </Container>
      </div>
      <PatientBookingAppointment show={showModal1} handleCloseModal={handleCloseModal1}/>
      <PatientViewCalendar dataRow={appointments} show={showModal3} handleCloseModal={handleCloseModal3}/>
    </div>
  )
}

export default PatientDashboard