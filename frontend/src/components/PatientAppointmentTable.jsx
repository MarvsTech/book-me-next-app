import React from 'react'
import {Table, Button} from 'react-bootstrap'

const PatientAppointmentTable = ({dataRow, handleShowModal}) => {
  return (
    <div className='table-content-wrapper'>
      <Table className='patient-appointment-table'>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Email</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            (dataRow.map((data, index) => {
              return (
                <>
                  <tr key={`row-${index}`}>
                    <td>{data.doctor.firstname} {data.doctor.middlename} {data.doctor.lastname}</td>
                    <td>{data.doctor.email}</td>
                    <td>{data.booking_date}</td>
                    <td>{data.booking_time}</td>
                    <td>
                      {
                        (data.status === 2) ? 
                          <Button variant='warning' className='patient-appointment-status'>Pending</Button>
                        : (data.status === 1) ?
                          <Button variant='success' className='patient-appointment-status'>Completed</Button>
                        : (data.status === 3) ?
                          <Button variant='danger' className='patient-appointment-status'>Rejected</Button>
                        :
                          null
                      }
                    </td>
                  </tr>
            
                </>
                )
            }))
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default PatientAppointmentTable
