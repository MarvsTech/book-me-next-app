import React, { useEffect, useState } from 'react'
import BookingLogo from '../images/all-booking.svg';
import BookingSuccess from '../images/booking-success.svg';
import BookingPending from '../images/booking-pending.svg';
import BookingDelete from '../images/booking-delete.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookingCard = ({cardData}) => { 
  const bookingItems = [
    {
      title: 'Bookings',
      value: cardData.bookings,
      percentage: '+100%',
      background: '#00AACF',
      icon: <img src={BookingLogo} alt="BookingLogo" className="icon" />,
    },
    {
      title: 'Successful',
      value: cardData.successful,
      percentage: cardData.successful_percentage,
      background: '#008000',
      icon: <img src={BookingSuccess} alt="BookingSuccess" className="icon" />,
    },
    {
      title: 'Pending',
      value: cardData.pending,
      percentage: cardData.pending_percentage,
      background: '#F77F00',
      icon: <img src={BookingPending} alt="BookingPending" className="icon" />,
    },
    {
      title: 'Rejected',
      value: cardData.rejected,
      percentage: cardData.rejected_percentage,
      background: '#D62828',
      icon: <img src={BookingDelete} alt="BookingDelete" className="icon" />,
    },
  ];

  return (
    <>
      <Container>
        <Row>
          {bookingItems.map((item, index) => (
            <Col className='d-flex justify-content-center'>
              <div className="card-wrapper" key={index}>
                <div className="card-icon-wrapper" style={{ backgroundColor: item.background }}>
                  {item.icon}
                </div>
                <p className="bookings">{item.title}</p>
                <h1>{item.value}</h1>
                <div className="footer-card">
                  <div className="horizontal-line"></div>
                  <p><span className='percentage'>{item.percentage}</span> than last month</p>
                </div>
              </div>
            </Col>
          ))} 
        </Row>
      </Container>
    </>
  );
};

export default BookingCard;
