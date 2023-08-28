import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const PatientViewCalendar = ({ dataRow, show, handleCloseModal }) => {
  const [allEvent, setAllEvent] = useState([]);

  useEffect(() => {
    if (dataRow) {
      const updatedEvents = dataRow.map(item => {
        const bookingDateTime = new Date(`${item.booking_time}T${item.booking_date}`);
        return {
          title: `Appointment with doctor: ${item.doctor.firstname} ${item.doctor.lastname}`,
          start: bookingDateTime,
          end: bookingDateTime,
        };
      });
      setAllEvent(updatedEvents);
    }
  }, [dataRow]);

  return (
    <Modal show={show} onHide={handleCloseModal} className='view-calendar-modal'>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Calendar
          localizer={localizer}
          events={allEvent}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default PatientViewCalendar;
