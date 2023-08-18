import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from '../images/dashboard.svg';
import Doctor from '../images/doctor.svg';
import UserLog from '../images/user.svg';
import Appointment from '../images/appointment.svg';
import Setting from '../images/settings.svg';
import Logout from '../images/logout.svg';
import Logo from '../images/booking-logo.svg';

const Sidebar = ({ children, roleId }) => {
  const menuItems = [
    {
      path: (roleId === 1) ? '/admin' : '/doctor',
      name: "dashboard",
      label: "Dashboard",
      icon: <img src={Dashboard} alt="Dashboard" className='inverted-color' style={{ width: '20px'}}/>,
    },
    {
      path: (roleId === 1) ? '/admin/appointments' : '/doctor/appointments',
      name: "appointment",
      label: "Appointments",
      icon: <img src={Appointment} alt="Appointments" className='inverted-color' style={{ width: '20px'}} />,
    },
    {
      path: (roleId === 1) ? '/admin/user/logs' : '/doctor/user/logs',
      name: "userlogs",
      label: "User logs",
      icon: <img src={UserLog} alt="User Logs" className='inverted-color' style={{ width: '20px'}} />,
    },
    {
      path: (roleId === 1) ? '/admin/settings' : '/doctor/settings',
      name: "settings",
      label: "Settings",
      icon: <img src={Setting} alt="Settings" className='inverted-color' style={{ width: '20px'}} />,
    },
  ];

  if (roleId === 1) {
    menuItems.splice(1, 0, { 
      path: '/admin/doctors',
      name: 'doctor',
      label: 'Doctors',
      icon: <img src={Doctor} alt="Doctors" className='inverted-color' style={{ width: '20px' }} />,
    });
  }

  const logoutItems = [
    {
      path: '/logout',
      name: "logout",
      label: "Logout",
      icon: <img src={Logout} alt="Dashboard" className='inverted-color' style={{ width: '20px'}}/>,
    },
  ];

  const logoItems = [
    {
      path: '/book-me-next',
      name: "book-me-next",
      label: "BookMeNext",
      icon: <img src={Logo} alt="BookMeNext-Logo" style={{ width: '20px'}}/>,
    },
  ];

  const dashboardPath = '/';

  return (
    <>
      <nav className="col-md-2 d-md-block bg-light sidebar">
        <div className="logo-wrapper">
          <ul className="nav flex-column logo-nav">
            {logoItems.map((item, index) => (
              <NavLink to={item.path} className="nav-link">
                {item.icon} 
                <span className='logo-header'>{item.label}</span>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="position-sticky">
          <ul className="nav flex-column">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink exact to={item.path} className="nav-link" activeClassName="active">
                  {item.icon} 
                  <span className='nav-link-text'>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="logout">
          <ul className="nav flex-column">
            {logoutItems.map((item, index) => (
              <NavLink exact to={dashboardPath} className="nav-link" activeClassName="active">
                {item.icon} 
                <span className='nav-link-text'>{item.label}</span>
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>
      <div className='main-content'>{children}</div>
    </>
  );
};

export default Sidebar;
