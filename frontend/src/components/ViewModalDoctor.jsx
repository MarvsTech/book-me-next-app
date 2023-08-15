import React, { useEffect, useState } from 'react'
import { Container, Modal, Button, Row, Col } from 'react-bootstrap'

const ViewModalDoctor = ({showView, onCloseView, dataRow}) => {

  const [isDoctor, setIsDoctor] = useState(true);
  const [isPatient, setIsPatient] = useState(false);

  return (
    <>
      <Modal show={showView} onHide={onCloseView}>
        <Modal.Header closeButton>
          <div>
            {isDoctor && (
              (dataRow.isActive === true) ?
                <Button variant='success'>Active</Button>
              :
                <Button variant='danger'>Not Active</Button>
            )}
          </div>
           
        </Modal.Header>

        <Modal.Body>
            <Container>
              <Row>
                <div className='user-portrait'>{dataRow.image}</div>
                <div className='modal-sub-header'>
                    <h4>{dataRow.doctor}, <span>Room {dataRow.room}</span></h4>
                    <p>{dataRow.email}</p>
                </div>
              </Row>
              <Row>
                <Col>
                  <p className='input-label'>Specialization</p>
                  <div className='input-container'>{dataRow.specialization}</div>
                </Col>
                <Col>
                  <p className='input-label'>No. of Booking Appointments</p>
                  <div className='input-container'>{dataRow.no_bookings}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className='input-label'>Contact Number</p>
                  <div className='input-container-row'>{dataRow.contact}</div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className='input-label'>Address</p>
                  <div className='input-container-row'>{dataRow.address}</div>
                </Col>
              </Row>
            </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ViewModalDoctor
