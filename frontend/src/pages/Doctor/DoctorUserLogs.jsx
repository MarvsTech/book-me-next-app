import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import UserLogTable from '../../components/UserLogTable'

const DoctorUserLogs = () => {
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
      <DashboardHeader/>

      <UserLogTable data={tableBody} />
    </div>
  )
}

export default DoctorUserLogs
