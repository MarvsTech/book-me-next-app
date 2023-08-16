import React from 'react'
import {Modal, Button, Container, Row, Col} from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const ViewPatientModal = ({show, onClose, dataRow}) => {

  const location = useLocation();

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <div>
            {
                (dataRow.status === 'pending') ? 
                    <Button variant='warning'>Pending</Button>
                : (dataRow.status === 'completed') ?
                    <Button variant='success'>Completed</Button>
                : (dataRow.status === 'rejected') ?
                    <Button variant='danger'>Rejected</Button>
                :
                    null
            }
          </div>

          <div>
            {
              (dataRow.status === 'pending' && location.pathname === '/doctor/appointment') ?
                <Button variant='danger'>Reject</Button>
              :
                null
            }
          </div>
           
        </Modal.Header>

        <Modal.Body>
            <Container>
              <Row>
                <div className='user-portrait'>{dataRow.image}</div>
                <div className='modal-sub-header'>
                    <h4>{dataRow.patient}</h4>
                    <p>{dataRow.email}</p>
                </div>
              </Row>
              <Row>
                <Col>
                  <p className='input-label'>Booking Date</p>
                  <div className='input-container'>{dataRow.booking_date}</div>
                </Col>
                <Col>
                  <p className='input-label'>Booking Time</p>
                  <div className='input-container'>{dataRow.booking_time}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className='input-label'>Doctor</p>
                  <div className='input-container-row'>{dataRow.doctor}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className='input-label'>Doctor Specialization</p>
                  <div className='input-container-row'>{dataRow.doctor_specialization}</div>
                </Col>
              </Row>
            </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ViewPatientModal
