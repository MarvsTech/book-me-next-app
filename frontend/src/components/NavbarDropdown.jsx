import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import PatientProfile from '../images/woman.svg';
import ProfileSettings from '../images/profile-settings.png'
import PasswordSettings from '../images/password-settings.png'
import Logout from '../images/logout-black.png'
import PatientProfileSettings from './PatientProfileSettings';

const NavbarDropdown = ({handleShowModal, show, handleCloseModal}) => {

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <img src={PatientProfile} alt="Logo" className='navlink dropdown-trigger'/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
            <img src={ProfileSettings}></img>
            <div onClick={handleShowModal}>Profile Settings</div>
            <PatientProfileSettings show={handleShowModal} onHide={handleCloseModal} />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
            <img src={PasswordSettings}></img>
            <div>Password</div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
            <img src={Logout}></img>
            <div>Logout</div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default NavbarDropdown
