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

import UserProvider, { useAuth } from '../../config/UserContext';
import EditProfile from '../../components/EditProfile';
import Calendar from '../../components/Calendar';


const PatientDashboard = () => {
  const { currentUser } = useAuth();

  const tableBody = [
    {
      doctor : 'Jane Doe',
      username : 'janedoe',
      password : 'janedoe',
      firstName : 'Jane',
      lastName : 'Doe',
      contact : '+639123456789',
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

    // useState, useEffect, and onSubmit function for user data start
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {

      const data = tableBody[0];

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

    // Modal functions start
    const [showModal1, setShowModal1] = useState(false);
    const handleCloseModal1 = () => setShowModal1(false);
    const handleShowModal1 = () => setShowModal1(true);

    const [showModal2, setShowModal2] = useState(false);
    const handleCloseModal2 = () => setShowModal2(false);
    const handleShowModal2 = () => setShowModal2(true);

    const [showModal3, setShowModal3] = useState(false);
    const handleCloseModal3 = () => setShowModal3(false);
    const handleShowModal3 = () => setShowModal3(true);
    // Modal functions end

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
              <PatientAppointmentTable dataRow={tableBody}/>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Book Appointment Modal Start */}
      <Modal show={showModal1} onHide={handleCloseModal1} className='booking-modal-content'>
        <Modal.Header closeButton className='booking-header'>
          <h1>Book Appointment</h1>
        </Modal.Header>
        <Modal.Body className='booking-body'>
          <Container fluid>
            <Form className='booking-form' onSubmit={e => onSubmit(e)}>
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
      {/* Book Appointment Modal End */}

      {/* Edit Profile Modal Start */}
      <Modal className='edit-profile-modal' show={showModal2} onHide={handleCloseModal2}>
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
                <Button type='submit' onClick={handleCloseModal2}>Update Profile</Button>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
      {/* Edit Profile Modal End */}

      {/* Calendar Modal Start */}
      <Modal show={showModal3} onHide={handleCloseModal3} className='view-calendar-modal'>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Calendar />
        </Modal.Body>
      </Modal>
      {/* Calendar Modal End */}
    </div>
  )
}

export default PatientDashboard