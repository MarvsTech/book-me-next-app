import React, { useState, useEffect } from 'react'
import PatientTable from '../../components/PatientTable'
import ViewPatientModal from '../../components/ViewPatientModal'
import womanPortrait from '../../images/woman.svg'
import manPortrait from '../../images/man.svg'
import DashboardHeader from '../../components/DashboardHeader'
import { useAuth } from '../../config/UserContext';
import axios from 'axios';

const DoctorSchedule = () => {
  const { currentUser } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  useEffect(() => {
    if (currentUser && currentUser.id && currentUser.token) {
      axios.get('http://localhost:8000/api/doctor/appointments/patient/records', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        const responseData = response.data.data;
        console.log(response.data.data);
        const scheds = responseData.map((i) => {
          return {
            patient: i.patient,
            doctor: i.doctor,
            status: i.status_id,
            booking_date: i.doctor_schedule_time.time_available,
            booking_time: i.doctor_schedule_date.date_available,
          };
        });
        setAppointments(scheds);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    }
  }, [currentUser]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (data) => {
    setSelectedRow(data);
    setShowModal(true);
  }

  useEffect(() => {
    console.log('selected row: ', selectedRow)
  },[selectedRow])

  return (
    <>
      <DashboardHeader name={ currentUser.name }/>

      <PatientTable dataRow={appointments} handleShowModal={handleShowModal}/>

      <ViewPatientModal show={showModal} onClose={handleCloseModal} dataRow={selectedRow}/>
    </>
  )
}

export default DoctorSchedule
