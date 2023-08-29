import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const ChangePasswordModal = ({show, handleCloseModal, data}) => {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if (data) {
          setCurrentPassword(data.currentPassword);
        }
    }, [data])

    const onSubmit = e => {
      e.preventDefault();
    }

  return (
    <div>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton className='create-sched-header'>
            <div>Change Password</div>
        </Modal.Header>
        <Modal.Body className='booking-body'>
            <FloatingLabel controlId="floatingInputCurrentPassword" label="Current Password" className="change-password-input">
                <Form.Control type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} placeholder=""/>
            </FloatingLabel>

            <Form onSubmit={e => onSubmit(e)}>
                <FloatingLabel controlId="floatingInputNewPassword" label="New Password" className="change-password-input">
                    <Form.Control type="password"/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingInputConfirmNewPassword" label="Confirm New Password" className="change-password-input">
                    <Form.Control type="password"/>
                </FloatingLabel>

                <div className='change-password-btn'>
                    <Button type='submit' onClick={handleCloseModal}>Change Password</Button>
                </div>
            </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ChangePasswordModal
