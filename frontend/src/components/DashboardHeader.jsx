import React from 'react'
import { useLocation } from 'react-router-dom'
import woman from '../images/woman.svg'
import NavbarDropdown from './NavbarDropdown';

const DashboardHeader = (props) => {

    const location = useLocation();
    const getCurrentMonth = () => {
        const months = [
            'January', 
            'February', 
            'March', 
            'April', 
            'May', 
            'June', 
            'July', 
            'August', 
            'September', 
            'October', 
            'November', 
            'December'
        ];
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        return `${months[currentMonth]} ${currentYear}`;
    };
    return (
        <div className='header-wrapper'>
            <div className='header-top'>
                <div className='left-header'>
                    {
                        (location.pathname === '/admin/dashboard' || location.pathname === '/doctor/dashboard') ?
                            <h1>Dashboard</h1>
                        : (location.pathname === '/doctor/dashboard') ?
                            <h1>Doctors</h1>
                        : (location.pathname === '/admin/appointment' || location.pathname === '/doctor/appointment') ?
                            <h1>Appointments</h1>
                        : (location.pathname === 'admin/user/log' || location.pathname === '/doctor/user/log') ?
                            <h1>User Logs</h1>
                        : (location.pathname === '/admin/settings' || location.pathname === '/doctor/settings') ?
                            <h1>Settings</h1>
                        :
                            null
                    }
                </div>
                
                <div className='right-header'>
                    <h2>Hello, <span>{ props.name }</span></h2>
                    <div>
                        <NavbarDropdown/>
                    </div>
                </div>
            </div>

            <div className='header-bottom'>
                {
                    (location.pathname === '/dashboard' || location.pathname === '/doctor/dashboard') ?
                        <h1>Month of <span>{ getCurrentMonth() }</span></h1>
                    :
                        null
                }
            </div>
        </div>
    )
}

export default DashboardHeader
