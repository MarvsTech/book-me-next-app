import React, {useS} from 'react'
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
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                (dataRow.map((data, index) => {
                  return (
                    <>
                      <tr key={`row-${index}`} onClick={() => handleShowModal(data)}>
                        <td>{data.patient}</td>
                        <td>{data.email}</td>
                        <td>{data.doctor}</td>
                        <td>{data.booking_date}</td>
                        <td>{data.booking_time}</td>
                        <td>
                          {
                            (data.status === 'pending') ? 
                                <Button variant='warning'>Pending</Button>
                            : (data.status === 'completed') ?
                                <Button variant='success'>Completed</Button>
                            : (data.status === 'rejected') ?
                                <Button variant='danger'>Rejected</Button>
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
