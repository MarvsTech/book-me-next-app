import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import PatientProfile from '../../images/woman.svg';
import Calendar from '../../images/calendar.svg';
import UserIcon from '../../images/user.svg';
import PhoneNumber from '../../images/phone.svg';
import Address from '../../images/maps.svg';
import AddButton from '../../images/add-btn.svg';
import PatientAppointmentTable from '../../components/PatientAppointmentTable';
import Navbar from '../../components/Navbar';

const PatientDashboard = () => {
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

   const user = {
        isPatient : true
    }

  return (
    <div>
      <Navbar user={user}/>

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
                    <div className="profile-wrapper">
                      <h1>Jane Smith</h1>
                      <div className="profile-content-wrapper">
                        <img src={UserIcon} alt="User Icon" />
                        <p>Female</p>
                      </div>
                      <div className="profile-content-wrapper">
                        <img src={Calendar} alt="Calendar" />
                        <p>July 9, 2000</p>
                      </div>
                      <div className="profile-content-wrapper">
                        <img src={PhoneNumber} alt="Phone Number" />
                        <p>+639123456789</p>
                      </div>
                      <div className="profile-content-wrapper">
                        <img src={Address} alt="Address" />
                        <p>123 Magic Shop, CA</p>
                      </div>
                    </div>
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