import React, { useState } from 'react'
import {Table, Button} from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useAuth } from '../config/UserContext';

const PatientTable = ({dataRow, handleShowModal, itemPerPage}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { currentUser } = useAuth();

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItem = dataRow.slice(startIndex, endIndex);

  const location = useLocation();

  const changeAppointmentStatus = (appointmentId) => {
    Swal.fire({
      title: 'Change Status',
      text: 'Are you sure you want to set the status to "Complete"?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ecc71',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Complete',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`http://localhost:8000/api/doctor/appointments/${appointmentId}/success`, null, {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        })
        .then(response => {
          Swal.fire('Status Changed!', 'Appointment status changed to "Complete".', 'success');
        })
        .catch(error => {
          console.error('Error changing appointment status:', error);
        });
      }
    });
  }

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
                (currentItem.map((data, index) => {
                  return (
                    <>
                      <tr key={`row-${index}`}>
                        <td>{data.patient.firstname} {data.patient.middlename} {data.patient.lastname}</td>
                        <td>{data.patient.email}</td>
                        <td>{data.doctor.firstname} {data.doctor.middlename} {data.doctor.lastname}</td>
                        <td>{data.booking_date}</td>
                        <td>{data.booking_time}</td>
                        <td>
                          {
                            (data.status === 2 && location.pathname === '/doctor/appointments') ?  
                              <Button variant='warning' className='patient-appointment-status' onClick={() => console.log(data.id)}>Pending</Button>

                            : (data.status === 2 && location.pathname === '/admin/appointments') ?
                              <Button variant='warning' className='patient-appointment-status' disabled>Pending</Button>

                            : (data.status === 1) ?
                              <Button variant='success' className='patient-appointment-status' disabled>Completed</Button>

                            : (data.status === 3) ?
                              <Button variant='danger' className='patient-appointment-status' disabled>Rejected</Button>
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
          <div className='prev-next-btn'>
            <button className='prev-btn' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button className='next-btn' onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= dataRow.length}>Next</button>
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export default PatientTable
