import React from 'react'
import {Table, Button} from 'react-bootstrap'

const PatientTable = ({dataRow, handleShowModal}) => {

  return (
    <>
      <div className='table-content-wrapper'>
        <div className='table-header'>
            <h1 className='title-without-btn'>Appointments</h1>
        </div>

        <div className='table-content'>
          <Table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Email</th>
                <th>Doctor</th>
                <th>Booking Date</th>
                <th>Booking Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { 
                (dataRow.map((data, index) => {
                  return (
                    <>
                      <tr key={`row-${index}`} onClick={() => handleShowModal(data)}>
                        <td>{data.patient.firstname} {data.patient.middlename} {data.patient.lastname}</td>
                        <td>{data.patient.email}</td>
                        <td>{data.doctor.firstname} {data.doctor.middlename} {data.doctor.lastname}</td>
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
      </div>
      
    </>
    
  )
}

export default PatientTable
