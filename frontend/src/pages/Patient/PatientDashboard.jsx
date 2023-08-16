import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { NavLink } from "react-router-dom";

import Logo from '../../images/booking-logo.svg';
import PatientProfile from '../../images/woman.svg';

import AddButton from '../../images/add-btn.svg';
import PatientAppointmentTable from '../../components/PatientAppointmentTable';
import { Navbar } from 'react-bootstrap';
import PatientCard from '../../components/PatientCard';

import UserProvider, { useAuth } from '../../config/UserContext';

const PatientDashboard = () => {
  const { currentUser } = useAuth();

  const tableBody = [
    {
      doctor : 'Jane Doe',
      email : 'janedoe@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'pending',
    },
    {
      doctor : 'John Doe',
      email : 'johndoe@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'completed',
    },
    {
      doctor : 'Juan Dela Cruz',
      email : 'juandelacruz@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'rejected',
    },
    {
      doctor : 'Juana Dela Cruz',
      email : 'juanadelacruz@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'pending',
    }
  ]

  return (
    <div>
      <Navbar/>

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
                    <img src={AddButton} alt="" className='Add Booking'/>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <Button variant="primary">View appointments</Button>
            </Col>
            <Col md={12}>
              <PatientAppointmentTable dataRow={tableBody}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default PatientDashboard