import React from 'react'
import Tables from '../components/Tables'

const UserLog = () => {

  const tableHead = [
    {tableHead : 'name'},
    {tableHead : 'role'},
    {tableHead : 'ip'},
    {tableHead : 'date_logged_in'},
  ]

  const tableBody = [
    {
      name : 'Jane Doe',
      role : 'Doctor',
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
    <div className='table-content-wrapper'>
        <div className='table-content-header'></div>
        <Tables columns={tableHead} data={tableBody} />
    </div>
  )
}

export default UserLog