import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import BookAppointment from '../images/book-appointment.png'
import SearchDoctor from '../images/search-doctor.png'
import BookingSteps from '../images/for-steps-booking.png'
import FooterBookingLogo from '../images/booking-logo-white.png'

const Blog = () => {

    const user = {
        isPatient : false
    }

  return (
    <div className='blog-container'>
      <Navbar user={user}/>

      <Container fluid className='landing-page'>
        <Row className='row-container'>
            <Col className='left-landing'>
                <div>
                    <h1>Need to book a doctor?</h1>
                    <h4>Book an appointment at the comfort of your home.</h4>
                </div>
            </Col>
            <Col className='right-landing'>
                <div className='right-container'>
                    <img src={BookAppointment} alt='book appointment illustration'/>
                    <h1>Search for Doctors</h1>
                </div>
                <div className='right-container'>
                    <img src={SearchDoctor} alt='search doctor illustration'/>
                    <h1>Book an Appointment</h1>
                </div>
            </Col>
        </Row>
      </Container>

      <Container className='how-it-works'>
        <Row className='container-title'>
            <h1>HOW IT WORKS</h1>
        </Row>
        
        <Row className='row-container'>
            <div className='booking-steps-div' md={4}>
                <div className='booking-steps-content'>
                    <img src={BookingSteps} alt='booking step illustration'/>
                    <p>Search for doctors</p>
                </div>
            </div>
            <div className='booking-steps-div' md={4}>
                <div className='booking-steps-content'>
                    <img src={BookingSteps} alt='booking step illustration'/>
                    <p>Create account/login</p>
                </div>
            </div>
            <div className='booking-steps-div' md={4}>
                <div className='booking-steps-content'>
                    <img src={BookingSteps} alt='booking step illustration'/>
                    <p>Set schedule and other details</p>
                </div>
            </div>
        </Row>

        <Row className='row-container'>
            <div className='booking-steps-div' md={4}>
                <div className='booking-steps-content'>
                    <img src={BookingSteps} alt='booking step illustration'/>
                    <p>Booking done</p>
                </div>
            </div>
            <div className='booking-steps-div' md={4}>
                <div className='booking-steps-content'>
                    <img src={BookingSteps} alt='booking step illustration'/>
                    <p>Wait for email confirmation</p>
                </div>
            </div>
            <div className='booking-steps-div' md={4}>
                <div className='booking-steps-content'>
                    <img src={BookingSteps} alt='booking step illustration'/>
                    <p>Book appointment</p>
                </div>
            </div>
        </Row>
      </Container>

      <Container fluid className='testimonials'>
        <Row className='container-title'>
            <h1>TESTIMONIALS</h1>
        </Row>

        <Row className='row-container'>
            <div className='booking-steps-div'>
                <div className='booking-steps-content'>
                    <p>Jane Doe</p>
                </div>
            </div>
            <div className='booking-steps-div'>
                <div className='booking-steps-content'>
                    <p>Jane Smith</p>
                </div>
            </div>
            <div className='booking-steps-div'>
                <div className='booking-steps-content'>
                    <p>Juana Dela Cruz</p>
                </div>
            </div>
        </Row>
      </Container>

      <Container fluid className='footer-container'>
        <Row className='footer-links'>
            <Col className='quick-links-container'>
                <h4>Quick Links</h4>
                <ul>
                    <li className='footer-links'><a href='#'>About Us</a></li>
                    <li className='footer-links'><a href='#'>Contact Us</a></li>
                </ul>
            </Col>
            <Col className='follow-us-container'>
                <h4>Follow Us</h4>
                <ul>
                    <li className='footer-links'><a href='#'>Facebook</a></li>
                    <li className='footer-links'><a href='#'>Twitter</a></li>
                    <li className='footer-links'><a href='#'>Instagram</a></li>
                </ul>
            </Col>
        </Row>

        <Row className='footer-logo'>
            <div className='footer-logo-content'>
                <img src={FooterBookingLogo} alt='BookMeNext logo'/>
                <h4>BookMeNext</h4>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Blog
