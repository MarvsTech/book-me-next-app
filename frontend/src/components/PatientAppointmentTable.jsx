import React, {useState} from 'react'
import {Table, Button} from 'react-bootstrap'

const PatientAppointmentTable = ({dataRow, itemPerPage}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItem = dataRow.slice(startIndex, endIndex);

  return (
    <div className='table-content-wrapper'>
      <div>
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
              (currentItem.map((data, index) => {
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
        <div className='prev-next-btn-patient'>
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= dataRow.length}>Next</button>
        </div>
      </div>
      
    </div>
  )
}

export default PatientAppointmentTable
