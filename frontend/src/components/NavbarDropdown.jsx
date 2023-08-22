import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PatientProfile from '../images/woman.svg';
import ProfileSettings from '../images/profile-settings.png';
import PasswordSettings from '../images/password-settings.png';
import Logout from '../images/logout-black.png';
import PatientProfileSettings from './PatientProfileSettings';
import Swal from 'sweetalert2';
import axios from 'axios';

import { useAuth } from '../config/UserContext';

const NavbarDropdown = () => {
  const { currentUser: { token } } = useAuth();
  const handleLogout = async () => {
    await Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Logout',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post('http://localhost:8000/api/signout', null, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            window.location.href = 'http://localhost:3000/login';
          } else {
            console.error('Logout request was not successful. Status code:', response.status);
          }
          
        } catch (error) {
          console.error('Error during logout:', error);
        }
      }
    });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <img src={PatientProfile} alt="Logo" className='navlink dropdown-trigger'/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <img src={ProfileSettings} alt="Profile Settings"></img>
          <div>Profile Settings</div>
          <PatientProfileSettings />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <img src={PasswordSettings} alt="Password Settings"></img>
          <div>Password</div>
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>
          <img src={Logout} alt="Logout" />
          <div>Logout</div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarDropdown;
