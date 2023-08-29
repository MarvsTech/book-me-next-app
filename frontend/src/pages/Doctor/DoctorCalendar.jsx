import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { useAuth } from '../../config/UserContext';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';

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

const DoctorCalendar = () => {
  const { currentUser } = useAuth();
  const [allEvent, setAllEvent] = useState([]);

  useEffect(() => {
    if (currentUser && currentUser.id && currentUser.token) {
      axios.get('http://localhost:8000/api/doctor/appointments/all/schedule', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        const responseData = response.data.data;
        const scheds = responseData.map(i => {         
          const bookingDateTime = new Date(`${i.doctor_schedule_date.date_available}T${i.doctor_schedule_time.time_available}`);
          return {
            title: "Appointment",
            start: bookingDateTime,
            end: bookingDateTime,
          };
        });
        setAllEvent(scheds);
        
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    }
  }, [currentUser]);

  return (
    <div>
      <DashboardHeader name={currentUser.firstname} />
      <div className='doctor-calendar-container'>
        <Calendar
          localizer={localizer}
          events={allEvent}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </div>
  );
};

export default DoctorCalendar;
