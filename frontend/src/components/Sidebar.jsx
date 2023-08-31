import React, { useEffect } from 'react';
import { NavLink, useLocation  } from 'react-router-dom';
import Dashboard from '../images/dashboard.svg';
import Doctor from '../images/doctor.svg';
import UserLog from '../images/user.svg';
import Appointment from '../images/appointment.svg';
import Setting from '../images/settings.svg';
import Logout from '../images/logout.svg';
import Logo from '../images/booking-logo.svg';
import Schedule from '../images/calendar-white.svg'
import Calendar from '../images/calendarWhite.svg'

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
    // {
    //   path: (roleId === 1) ? '/admin/user/logs' : '/doctor/schedule',
    //   name: "userlogs",
    //   label: "User logs",
    //   icon: <img src={UserLog} alt="User Logs" className='inverted-color' style={{ width: '20px'}} />,
    // },
    // {
    //   path: (roleId === 1) ? '/admin/settings' : '/doctor/calendar',
    //   name: "settings",
    //   label: "Settings",
    //   icon: <img src={Setting} alt="Settings" className='inverted-color' style={{ width: '20px'}} />,
    // },
  ];

  if (roleId === 1) {
    menuItems.splice(1, 0, { 
      path: '/admin/doctors',
      name: 'doctor',
      label: 'Doctors',
      icon: <img src={Doctor} alt="Doctors" className='inverted-color' style={{ width: '20px' }} />,
    });
  }

  if (roleId === 2) {
    menuItems.splice(2, 0,
      { 
      path: '/doctor/schedules',
      name: 'schedule',
      label: 'Schedule',
      icon: <img src={Schedule} alt="Doctors" className='inverted-color' style={{ width: '20px' }} />,
      },
      { 
      path: '/doctor/calendar',
      name: 'calendar',
      label: 'Calendar',
      icon: <img src={Calendar} alt="Doctors" className='inverted-color' style={{ width: '20px' }} />,
      },
    );
  }

  const isActiveUrl = (url)  => {
    const location = window.location.pathname
    return location == url
  }

  const logoItems = [
    {
      path: '/book-me-next',
      name: "book-me-next",
      label: "BookMeNext",
      icon: <img src={Logo} alt="BookMeNext-Logo" style={{ width: '20px'}}/>,
    },
  ];

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

        <hr></hr>

        <div className="position-sticky">
          <ul className="nav flex-column">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink exact to={item.path} activeClassName="active" className={() =>
    isActiveUrl(item.path) ? "active nav-link" : "nav-link"
  }>
                  {item.icon} 
                  <span className='nav-link-text'>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className='main-content'>{children}</div>
    </>
  );
};

export default Sidebar;
