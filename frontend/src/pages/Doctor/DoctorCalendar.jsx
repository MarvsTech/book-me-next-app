import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import { useAuth } from '../../config/UserContext';
import Calendar from '../../components/Calendar';

const DoctorCalendar = () => {
  const {currentUser: {
    firstname, 
    lastname, 
    middlename,
    roleId,
  }} = useAuth();
  const name = `${firstname}`;

  return (
    <div>
      <DashboardHeader name={ name }/>
      
      <div className='doctor-calendar-container'>
        <Calendar/>
      </div>
    </div>
  )
}

export default DoctorCalendar
