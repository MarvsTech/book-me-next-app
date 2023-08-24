import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../images/booking-logo.svg';
import NavbarDropdown from './NavbarDropdown';
import { NavHashLink } from 'react-router-hash-link';


const Navbar = ({children, roleId}) => {

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <div className="patient-navbar">
        <Row>
          <Col md={6} className='navbar-brand-container' as={NavHashLink} to="/#landing">
            <div className="navbar-brand">
              <img src={Logo} alt="Logo" />
              <h1>BookMeNext</h1>
            </div>
          </Col>
          <Col md={6} className='navbar-links'>
            {
              (roleId) ?
                <>
                  <NavLink to="/" className='navlink'>Home</NavLink>
                  <NavLink to="/" className='navlink'>How it works</NavLink>
                  <NavLink to="/" className='navlink'>Our doctors</NavLink>
                  <NavbarDropdown/>
                </>
              :
                <>
                  <NavHashLink to="/#landing" className='navlink'>Home</NavHashLink>
                  <NavHashLink to="/#howItWorks" className='navlink'>How it works</NavHashLink>
                  <NavHashLink to="/" className='navlink'>Our doctors</NavHashLink>
                  <Button className='navlink' as={Link} to='/login'>Login</Button>
                  <Button className='navlink' as={Link} to='/register'>Register</Button>
                </>
            }
            
          </Col>
        </Row>
      </div>
      <div className='main-content'>{children}</div>
    </>
  )
}

export default Navbar
