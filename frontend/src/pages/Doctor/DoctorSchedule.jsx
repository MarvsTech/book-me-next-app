import React from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import UserLogTable from '../../components/UserLogTable'
import { useAuth } from '../../config/UserContext';

const DoctorSchedule = () => {
  const { currentUser } = useAuth();
  const tableBody = [
    {
      date : 'September 9, 2023',
      time : '8:00 AM - 9:30 AM',
      remarks : true,
    },
    {
      date : 'September 9, 2023',
      time : '1:30 PM - 3:00 PM',
      remarks : false,
    },
    {
      date : 'September 9, 2023',
      time : '3:00 PM - 4:30 PM',
      remarks : true,
    },
  ]

 return (
    <>
      <DashboardHeader name={ currentUser.name }/>

      {/* <PatientTable dataRow={appointments} handleShowModal={handleShowModal} itemPerPage={9}/>

      <ViewPatientModal show={showModal} onClose={handleCloseModal} dataRow={selectedRow}/> */}
    </>
  )
}

export default DoctorSchedule
