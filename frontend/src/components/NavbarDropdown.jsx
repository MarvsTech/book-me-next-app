import React, {useState, useEffect} from 'react';
import { Dropdown } from 'react-bootstrap';
import PatientProfile from '../images/woman.svg';
import ProfileSettings from '../images/profile-settings.png';
import PasswordSettings from '../images/password-settings.png';
import Logout from '../images/logout-black.png';
import CreateSchedule from '../images/create-schedule.png'
import PatientProfileSettings from './PatientProfileSettings';
import Swal from 'sweetalert2';
import axios from 'axios';

import { useAuth } from '../config/UserContext';
import CreateScheduleDoctor from './CreateScheduleDoctor';
import { useLocation } from 'react-router';
import ChangePasswordModal from './ChangePasswordModal';

const NavbarDropdown = () => {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState([]);
  const [showProfileSettingsModal, setShowProfileSettingsModal] = useState(false);
  const [showCreateSchedule, setShowCreateSchedule] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const location = useLocation();

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
              'Authorization': `Bearer ${currentUser.token}`,
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

  const handleCloseProfileSettings = () => {
    setShowProfileSettingsModal(false);
  };

  const handleCloseCreateSchedule = () => { 
    setShowCreateSchedule(false);
  }

  const handleCloseChangePassword = () => {
    setShowChangePassword(false);
  }

  useEffect(() => {
    if (currentUser && currentUser.id && currentUser.token) {
      axios.get('http://localhost:8000/api/patient/profile', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        const responseData = response.data.data;
        const userData = responseData.map((i) => {
          return {
            userInfo: i.user,
          };
        });
        setUserData(userData);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    }
  }, [currentUser]);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <img src={PatientProfile} alt="Logo" className='navlink dropdown-trigger'/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {
            (location.pathname === '/doctor' || location.pathname === '/doctor/appointments' || location.pathname === '/doctor/schedules' || location.pathname === '/doctor/calendar') ?
              <Dropdown.Item onClick={() => setShowCreateSchedule(true)}>
                <img src={CreateSchedule} alt="Profile Settings" />
                <div>Create Schedule</div>
              </Dropdown.Item>
            :
              null
          }
          
          <Dropdown.Item onClick={() => setShowProfileSettingsModal(true)}>
            <img src={ProfileSettings} alt="Profile Settings" />
            <div>Profile Settings</div>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setShowChangePassword(true)}>
            <img src={PasswordSettings} alt="Password Settings"></img>
            <div>Password</div>
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>
            <img src={Logout} alt="Logout" />
            <div>Logout</div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {
        (location.pathname === '/admin' || location.pathname === '/admin/doctors' || location.pathname === '/admin/appointments') ?
          <>
            <PatientProfileSettings
              show={showProfileSettingsModal}
              onHide={handleCloseProfileSettings}
              handleCloseModal = {handleCloseProfileSettings}
              data = {userData}
            />
            <ChangePasswordModal
              show={showChangePassword}
              handleCloseModal={handleCloseChangePassword}
              data={userData}
            />
          </>
        : (location.pathname === '/doctor' || location.pathname === '/doctor/appointments' || location.pathname === '/doctor/schedules' || location.pathname === '/doctor/calendar') ?
          <>
            <PatientProfileSettings
              show={showProfileSettingsModal}
              onHide={handleCloseProfileSettings}
              handleCloseModal = {handleCloseProfileSettings}
              data = {userData}
            />
            <ChangePasswordModal
              show={showChangePassword}
              handleCloseModal={handleCloseChangePassword}
              data={userData}
            />
          </>
        : (location.pathname === '/patient') ?
          <>
            <PatientProfileSettings
              show={showProfileSettingsModal}
              onHide={handleCloseProfileSettings}
              handleCloseModal = {handleCloseProfileSettings}
              data = {userData}
            />
            <ChangePasswordModal
              show={showChangePassword}
              handleCloseModal={handleCloseChangePassword}
              data={userData}
            />
          </>
        :
          null
      }

      <CreateScheduleDoctor 
        show={showCreateSchedule}
        handleCloseModal={handleCloseCreateSchedule}
      />

    </>
  );
};

export default NavbarDropdown;
