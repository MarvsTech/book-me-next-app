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

const AdminDoctor = () => {
  const [doctors, setDoctors] = useState([])
  const {currentUser: {
    firstname, lastname, middlename, roleId, token,
  }} = useAuth();

  useEffect(()=>{
    fetchDoctors() 
  },[]);

  const fetchDoctors = async () => {
    axios.get('http://localhost:8000/api/admin/doctor/all', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }).then(({data}) => {
      setDoctors(data);
    }).catch(error => {
      console.error('API request failed:', error);
  }); 
}

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  
  const [selectedRow, setSelectedRow] = useState({});

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = (data) => {
    setSelectedRow(data)
    setShowModal2(true);
  }

  useEffect(() => {
    console.log('selected row: ', selectedRow)
  },[selectedRow])

  return (
    <>
      <DashboardHeader firstname={ firstname } token={ token }/>
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
                  doctors.length > 0 && (
                    doctors.map((row, key)=>(
                      <tr key={`row-${key}`} onClick={() => handleShowModal2(row)}>
                        <td>{row.doctor}</td>
                        <td>{row.email}</td>
                        <td>{row.specialization}</td>
                        <td>{row.contact}</td>
                        <td>{row.address}</td>
                        <td>
                          {
                            (row.isActive === 0) ? 
                              <Button variant='danger'>Deactivate</Button>
                            :
                              <Button variant='success'>Activate</Button>
                          }
                        </td>
                      </tr>
                    ))
                  )
                }
              </tbody>
            </Table>
          </div>
          <ViewModalDoctor showView={showModal2} onCloseView={handleCloseModal2} dataRow={selectedRow} />  
      </div>
      <DoctorModals showAdd={showModal1} onCloseAdd={handleCloseModal1}/>
    </>

  )
}

export default AdminDoctor