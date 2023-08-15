import React from 'react'
import UserLogTable from '../components/UserLogTable'

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
      <UserLogTable data={tableBody}/>
    </>
  )
}

export default UserLog