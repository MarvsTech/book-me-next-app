import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BookAppointment from '../images/book-appointment.png'
import SearchDoctor from '../images/search-doctor.png'
import BookingSteps from '../images/for-steps-booking.png'
import FooterBookingLogo from '../images/booking-logo-white.png'
import CreateAccount from '../images/create-account.svg'
import SetSchedule from '../images/set-schedule.svg'
import BookingDone from '../images/booking-done.svg'
import EmailNotification from '../images/email-notification.svg'
import AppointmentBooked from '../images/appointment-booked.svg'
import Qoute from '../images/qoute.png'
import { FaStar } from 'react-icons/fa'

const Blog = () => {

    const user = {
        isPatient : false
    }

   function HowItWorksItem (props) {
        return (
            <>
                <div className='booking-steps-content'>
                    <img src={props.img} alt='booking step illustration'/>
                    <p>{props.contentText}</p>
                </div>
                <div className='steps-number'>{props.stepNumber}</div>
            </>
        )
   }

   function Testimonials (props) {
        return (
            <div className='testimonial-content'>
                <div className='testimonial-content-header'>
                    <img src={Qoute} alt='a right qoute'></img>
                    <p>{props.userName}</p>
                </div>
                <div className='testimonial-content-body'>
                    <p><i>{props.testimony}</i></p>
                    <div className='testimonial-star-fb'>
                        {[...Array(5)].map((star) => {
                            return <FaStar size={35} />
                        })}
                    </div>
                </div>
            </div>
        )
   }

  return (
    <div className='blog-container'>
      <Navbar user={user} />

      <Container fluid className='landing-page' id='landing'>
        <Row className='row-container'>
            <Col className='left-landing'>
                <div>
                    <h1>Need to book a doctor?</h1>
                    <h4>Book an appointment at the comfort of your home.</h4>
                </div>
            </Col>
            <Col className='right-landing'>
                <Button className='right-container' as={Link} to={'/login'}>
                    <img src={SearchDoctor} alt='book appointment illustration'/>
                    <h1>Search for Doctors</h1>
                </Button>
                <Button className='right-container' as={Link} to={'/login'}>
                    <img src={BookAppointment} alt='search doctor illustration'/>
                    <h1>Book an Appointment</h1>
                </Button>
            </Col>
        </Row>
      </Container>

      <Container className='how-it-works' id='howItWorks'>
        <Row className='container-title'>
            <h1>HOW IT WORKS</h1>
        </Row>
        
        <Row className='row-container'>
            <div className='booking-steps-div' md={4}>
                <HowItWorksItem img={CreateAccount} contentText={"Create account/login"} stepNumber={"1"}/>
            </div>
            <div className='booking-steps-div' md={4}>
                <HowItWorksItem img={SearchDoctor} contentText={"Search for doctors"} stepNumber={"2"}/>
            </div>
            <div className='booking-steps-div' md={4}>
                <HowItWorksItem img={SetSchedule} contentText={"Set schedule and other details"} stepNumber={"3"}/>
            </div>
        </Row>

        <Row className='row-container'>
            <div className='booking-steps-div' md={4}>
                <HowItWorksItem img={BookingDone} contentText={"Booking done"} stepNumber={"4"}/>
            </div>
            <div className='booking-steps-div' md={4}>
                <HowItWorksItem img={EmailNotification} contentText={"Wait for email confirmation"} stepNumber={"5"}/>
            </div>
            <div className='booking-steps-div' md={4}>
                <HowItWorksItem img={AppointmentBooked} contentText={"Appointment booked"} stepNumber={"6"}/>
            </div>
        </Row>
      </Container>

      <Container fluid className='testimonials'>
        <Row className='container-title'>
            <h1>TESTIMONIALS</h1>
        </Row>

        <Row className='row-container'>
            <div className='testimonial-div'>
                <Testimonials userName={'Jane Doe'} testimony={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam.'} />
            </div>
            <div className='testimonial-div'>
                <Testimonials userName={'Juana Dela Cruz'} testimony={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam.'} />
            </div>
            <div className='testimonial-div'>
                <Testimonials userName={'Jane Smith'} testimony={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam.'} />
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
