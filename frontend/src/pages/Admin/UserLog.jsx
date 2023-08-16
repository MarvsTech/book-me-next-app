import React from 'react'
import UserLogTable from '../../components/UserLogTable'
import DashboardHeader from '../../components/DashboardHeader'

const UserLog = () => {

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
    <>
      <DashboardHeader/>
      <UserLogTable data={tableBody}/>
    </>
  )
}

export default UserLog