import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Logo from '../images/booking-logo.svg';
import PatientProfile from '../images/woman.svg';

const Navbar = ({children}) => {

  const user = [
    {isAdmin : true},
    {isDoctor : true},
    {isPatient : true}
  ]

  return (
    <>
      <div className="patient-navbar">
        <Row>
          <Col md={6} className='navbar-brand-container'>
            <div className="navbar-brand">
              <img src={Logo} alt="Logo" />
              <h1>Book Me Next</h1>
            </div>
          </Col>
          <Col md={6} className='navbar-links'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/home">How it works</NavLink>
            <NavLink to="/home">Our doctors</NavLink>
            <img src={PatientProfile} alt="Logo" />
          </Col>
        </Row>
      </div>
      <div className='main-content'>{children}</div>
    </>
  )
}

export default Navbar
