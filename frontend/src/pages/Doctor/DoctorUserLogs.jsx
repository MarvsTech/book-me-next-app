import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import UserLogTable from '../../components/UserLogTable'
import { useAuth } from '../../config/UserContext';

const DoctorUserLogs = () => {
  const {currentUser: {
    firstname, 
    lastname, 
    middlename,
    roleId,
  }} = useAuth();
  const name = `${firstname}`;

  const tableBody = [
    {
      name : 'Jane Doe',
      role : 'Patient',
      ip : 'hmmmmmmm',
      date_logged_in : 'August 15, 2023',
    },
    {
      name : 'Jane Doe',
      role : 'Doctor',
      ip : 'hmmmmmmm',
      date_logged_in : 'August 15, 2023',
    },
  ]

  return (
    <div>
      <DashboardHeader name={ name }/>

      <UserLogTable data={tableBody} />
    </div>
  )
}

export default DoctorUserLogs
