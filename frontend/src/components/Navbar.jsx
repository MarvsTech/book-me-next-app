import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import Logo from '../images/booking-logo.svg';
import PatientProfile from '../images/woman.svg';

const Navbar = ({user}) => {

  return (
    <div className="patient-navbar">
        <Row>
          <Col md={6} className='navbar-brand-container'>
            <div className="navbar-brand">
              <img src={Logo} alt="Logo" />
              <h1>BookMeNext</h1>
            </div>
          </Col>
          <Col md={6} className='navbar-links'>
            {
                (user.isPatient) ?
                    <>
                        <NavLink to="/home" className='navlink'>Home</NavLink>
                        <NavLink to="/home" className='navlink'>How it works</NavLink>
                        <NavLink to="/home" className='navlink'>Our doctors</NavLink>
                        <img src={PatientProfile} alt="Logo" className='navlink'/>
                    </>
                :
                    <>
                        <NavLink to="/home" className='navlink'>Home</NavLink>
                        <NavLink to="/home" className='navlink'>How it works</NavLink>
                        <NavLink to="/home" className='navlink'>Our doctors</NavLink>
                        <Button className='navlink' as={NavLink} to={'/user/login'}>Login</Button>
                        <Button className='navlink' as={NavLink} to={'/user/register'}>Register</Button>
                    </>
            }
            
          </Col>
        </Row>
      </div>
  )
}

export default Navbar
