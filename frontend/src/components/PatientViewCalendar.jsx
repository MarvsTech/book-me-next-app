import React from 'react'
import { Modal } from 'react-bootstrap'
import Calendar from './Calendar'

const PatientViewCalendar = ({show, handleCloseModal}) => {
  return (
    <Modal show={show} onHide={handleCloseModal} className='view-calendar-modal'>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Calendar />
        </Modal.Body>
    </Modal>
  )
}

export default PatientViewCalendar
