import React, { useState, useEffect } from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import UserLogTable from '../../components/UserLogTable'
import { useAuth } from '../../config/UserContext';
import PatientTable from '../../components/PatientTable';

import "react-big-calendar/lib/css/react-big-calendar.css"
import { Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import DatePicker from "react-datepicker";
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

const DoctorSchedule = () => {
  const { currentUser } = useAuth();
  const [allEvent, setAllEvent] = useState([]);

  useEffect(() => {
    if (currentUser && currentUser.id && currentUser.token) {
      axios.get('http://localhost:8000/api/doctor/all/schedule', {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })
      .then(response => {
        const responseData = response.data.data;
        console.log(response.data.data);
        const scheds = responseData.map(i => {         
          const bookingStart = new Date(`${i.schedule_date}T${i.time_start}`);
          const bookingEnd = new Date(`${i.schedule_date}T${i.time_end}`);
          return {
            title: i.title,
            start: bookingStart,
            end: bookingEnd,
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
    <>
      <DashboardHeader name={ currentUser.firstname }/>
      <div className='doctor-calendar-container'>
        <Calendar
          localizer={localizer}
          events={allEvent}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </>
  )
}

export default DoctorSchedule
