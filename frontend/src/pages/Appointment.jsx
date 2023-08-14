import React from 'react'
import Tables from '../components/Tables'

const Appointment = () => {
  
  const tableHead = [
    {tableHead : 'patient'},
    {tableHead : 'doctor'},
    {tableHead : 'booking_date'},
    {tableHead : 'booking_time'},
    {tableHead : 'status'}
  ]

  const tableBody = [
    {
      patient : 'Jane Doe',
      doctor : 'janedoe@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'pending',
    },
    {
      patient : 'John Doe',
      doctor : 'johndoe@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'completed',
    },
    {
      patient : 'Juan Dela Cruz',
      doctor : 'juandelacruz@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'rejected',
    },
    {
      patient : 'Juana Dela Cruz',
      doctor : 'juanadelacruz@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'pending',
    }
  ]

  return (
    <div className='table-content-wrapper'>
        <div className='table-content-header'></div>
        <Tables columns={tableHead} data={tableBody} />
    </div>
  )
}

export default Appointment