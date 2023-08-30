import React from 'react'
import { Form, Modal, Container, Row, Col, Button } from 'react-bootstrap';

const PatientBookingAppointment = ({show, handleCloseModal}) => {

    const onSubmit = e => {
        e.preventDefault();
    }

  return (
    <Modal show={show} onHide={handleCloseModal} className='booking-modal-content'>
        <Modal.Header closeButton className='booking-header'>
          <h1>Book Appointment</h1>
        </Modal.Header>
        <Modal.Body className='booking-body'>
          <Container fluid>
            <Form className='booking-form' onSubmit={e => onSubmit(e)}>
              <Row className='booking-date-time'>
                <Col className='date-picker'>
                  <Form.Label>Booking Date:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder='Choose date'
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                  />
                </Col>
                <Col className='time-picker'>
                  <Form.Label>Booking Time:</Form.Label>
                  <Form.Select>
                    <option>Choose Time</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row className='choose-doctor'>
                <Form.Label>Doctor:</Form.Label>
                <Form.Select>
                  <option>Choose Doctor</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Row>

              <Row>
                <div className='book-btn'>
                  <Button type='submit' onClick={handleCloseModal}>Book Appointment</Button>
                </div>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
    </Modal>
  )
}

export default PatientBookingAppointment
