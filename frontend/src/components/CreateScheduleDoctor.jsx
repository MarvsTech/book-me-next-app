import React from 'react'
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CreateScheduleDoctor = ({show, handleCloseModal}) => {

    const onSubmit = e => {
        e.preventDefault();
    }

  return (
    <div >
        <Modal className='create-sched-modal' show={show} onHide={handleCloseModal}>
            <Modal.Header className='create-sched-header' closeButton>
                <div>Create Schedule</div>
            </Modal.Header>
            <Modal.Body className='create-sched-body'>
                <Container fluid>
                    <Form onSubmit={e => onSubmit(e)}>
                        <Container fluid>
                            <Row>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='enter schedule title'
                                />
                            </Row>
                            <Row>
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder='enter schedule description'
                                />
                            </Row>
                            <Row>
                                <Form.Label>Choose Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder='Choose date'
                                />
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Select>
                                        <option>Choose Time</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                 <Col>
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Select>
                                        <option>Choose Time</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Container>
                        
                        <div className='create-sched-btn'>
                            <Button type='submit' onClick={handleCloseModal}>Create Schedule</Button>
                        </div>
                    </Form>
                </Container>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default CreateScheduleDoctor
