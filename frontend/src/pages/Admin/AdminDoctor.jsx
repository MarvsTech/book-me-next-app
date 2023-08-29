import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import addFriend from '../../images/add-friend.svg'
import DoctorModals from '../../components/DoctorModals'
import ViewModalDoctor from '../../components/ViewModalDoctor'
import womanPortrait from '../../images/woman.svg'
import manPortrait from '../../images/man.svg'
import DashboardHeader from '../../components/DashboardHeader'
import { useAuth } from '../../config/UserContext';

import axios from 'axios';
import Swal from 'sweetalert2'

const AdminDoctor = () => {
  const [selectedRow, setSelectedRow] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [doctors, setDoctors] = useState([]);
  const { currentUser } = useAuth();
  const itemPerPage = 10;

  const [showModal1, setShowModal1] = useState(false);
  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);
  
  const [showModal2, setShowModal2] = useState(false);
  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = (data) => {
    setSelectedRow(data)
    setShowModal2(true);
  }

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentItem = doctors.slice(startIndex, endIndex);

  useEffect(() => {
    if (currentUser && currentUser.id && currentUser.token) {
      axios.get('http://localhost:8000/api/admin/doctor/all', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        const responseData = response.data.data;
        const scheds = responseData.map((i) => {
          return {
            firstname: i.firstname,
            lastname: i.lastname,
            middlename: i.middlename,
            email: i.email,
            specialization: i.specialization,
            contact: i.contact_number,
            address: i.address,
            isActive: i.isActive,
          };
        });
        setDoctors(scheds);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    }
  }, [currentUser]);

  useEffect(() => {
    console.log('selected row: ', selectedRow)
  },[selectedRow]);

  const doctorStatusDeactivate = () => {
    Swal.fire({
      title: 'Deactivate',
      text: 'Are you sure you want to deactivate this account?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Deactivate',
    })
  }

  const doctorStatusActivate = () => {
    Swal.fire({
      title: 'Activate',
      text: 'Are you sure you want to activate this account?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ecc71',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Activate',
    })
  }

  return (
    <>
      <DashboardHeader name={ currentUser.firstname } token={ currentUser.token }/>
      <div className='table-content-wrapper'>
        <div className='table-header'>
          <h1 className='title-with-btn'>Doctors</h1>
          <Button variant='dark' className='add-doctor-btn' onClick={handleShowModal1}>
            <img src={addFriend} alt="AddDoctor-Logo" />
            Doctor
          </Button>
        </div>

        <div className='table-content'>
          <Table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Email</th>
                <th>Specialization</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                (currentItem.map((data, index) => {
                  return (
                    <>
                      <tr key={`row-${index}`}>
                        <td>{data.firstname} {data.middlename} {data.lastname}</td>
                        <td>{data.email}</td>
                        <td>{data.specialization}</td>
                        <td>{data.contact}</td>
                        <td>{data.address}</td>
                        <td>
                        {
                          (data.isActive === 0) ? 
                          <Button variant='danger' onClick={doctorStatusDeactivate}>Deactivate</Button>
                          :
                          <Button variant='success' onClick={doctorStatusActivate}>Activate</Button>
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
            <button className='next-btn' onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= doctors.length}>Next</button>
          </div>
        </div>
        <ViewModalDoctor showView={showModal2} onCloseView={handleCloseModal2} dataRow={selectedRow} />  
      </div>
      <DoctorModals showAdd={showModal1} onCloseAdd={handleCloseModal1}/>
    </>

  )
}

export default AdminDoctor