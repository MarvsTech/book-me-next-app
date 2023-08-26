import React from 'react'
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CreateScheduleDoctor = ({show, handleCloseModal}) => {

    const onSubmit = e => {
        e.preventDefault();
    }

  return (
    <Modal className='create-sched-modal' show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='booking-body create-sched-body'>
            <Container>
                <Form onSubmit={e => onSubmit(e)}>
                    <Container>
                        <Row>
                            <Form.Label>Booking Date:</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder='Choose date'
                            />
                        </Row>
                        <Row>
                            <Form.Label>Booking Time:</Form.Label>
                            <Form.Select>
                                <option>Choose Time</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Row>
                    </Container>

                    <Button type='submit' onClick={handleCloseModal}>Create Schedule</Button>
                </Form>
            </Container>
        </Modal.Body>
    </Modal>
  )
}

export default CreateScheduleDoctor
