import React from 'react'
import { useLocation } from 'react-router-dom'
import woman from '../images/woman.svg'

const DashboardHeader = () => {

    const location = useLocation();

    // const { image, username } = prop;

  return (
    <div className='header-wrapper'>
        <div className='header-top'>
            <div className='left-header'>
                {
                    (location.pathname === '/') ?
                        <h1>Dashboard</h1>
                    : (location.pathname === '/doctor') ?
                        <h1>Doctors</h1>
                    : (location.pathname === '/appointment') ?
                        <h1>Appointments</h1>
                    : (location.pathname === '/user/log') ?
                        <h1>User Logs</h1>
                    : (location.pathname === '/settings') ?
                        <h1>Settings</h1>
                    :
                        null
                }
            </div>
            
            <div className='right-header'>
                <h2>Hello, <span>Admin</span></h2>
                <div>
                    <img src={woman} alt='woman portrait'/>
                </div>
            </div>
        </div>

        <div className='header-bottom'>
            {
                (location.pathname === '/') ?
                    <h1>Month of <span>July 2023</span></h1>
                :
                    null
            }
            
        </div>
    </div>
  )
}

export default DashboardHeader
