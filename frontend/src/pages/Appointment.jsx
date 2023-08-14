import React, { useState, useEffect } from 'react'
import PatientTable from '../components/PatientTable'
import ViewPatientModal from '../components/ViewPatientModal'
import womanPortrait from '../images/woman.svg'
import manPortrait from '../images/man.svg'

const Appointment = () => {

  const tableBody = [
    {
      patient : 'Jane Doe',
      email : 'janedoe@mail.com',
      doctor : 'janedoe@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'pending',
      doctor_specialization: 'Endocrinologist',
      image: <img src={womanPortrait} alt="portrait of a woman"/>
    },
    {
      patient : 'John Doe',
      email : 'johndoe@mail.com',
      doctor : 'johndoe@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'completed',
      doctor_specialization: 'Endocrinologist',
      image: <img src={manPortrait} alt="portrait of a woman"/>
    },
    {
      patient : 'Juan Dela Cruz',
      email : 'juandelacruz@mail.com',
      doctor : 'juandelacruz@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'rejected',
      doctor_specialization: 'Endocrinologist',
      image: <img src={manPortrait} alt="portrait of a woman"/>
    },
    {
      patient : 'Juana Dela Cruz',
      email : 'juanadelacruz@mail.com',
      doctor : 'juanadelacruz@mail.com',
      booking_date : 'August 15, 2023',
      booking_time : '8:00 AM - 9:30 AM',
      status : 'pending',
      doctor_specialization: 'Endocrinologist',
      image: <img src={womanPortrait} alt="portrait of a woman"/>
    }
  ]

  const [showModal, setShowModal] = useState(false);

  const [selectedRow, setSelectedRow] = useState({});

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
      <PatientTable dataRow={tableBody} handleShowModal={handleShowModal}/>

      <ViewPatientModal show={showModal} onClose={handleCloseModal} dataRow={selectedRow}/>
    </>
  )
}

export default Appointment