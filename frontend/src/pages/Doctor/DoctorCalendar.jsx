import React, {useState} from 'react'
import DashboardHeader from '../../components/DashboardHeader'
import { useAuth } from '../../config/UserContext';
import "react-big-calendar/lib/css/react-big-calendar.css"
import { Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import DatePicker from "react-datepicker";

const locales = {
  "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
  format,parse,startOfWeek,getDay,locales
});

const events = [
  {
    title: "Checkup Patient 1",
    allDay: false, // Set to false for events with specific times
    start: new Date(2023, 7, 1, 10, 0), // Add time here (10:00 AM)
    end: new Date(2023, 7, 1, 11, 0) // Add time here (11:00 AM)
  },
  {
    title: "Checkup Patient 2",
    allDay: true,
    start: new Date(2023, 7, 0),
    end: new Date(2023, 7, 0)
  },
  {
    title: "Laboratory Checkup Patient 1",
    allDay: false,
    start: new Date(2023, 7, 13, 14, 30), // Add time here (2:30 PM)
    end: new Date(2023, 7, 13, 16, 0) // Add time here (4:00 PM)
  },
  {
    title: "Meeting",
    allDay: false,
    start: new Date(2023, 7, 15, 15, 0), // Add time here (3:00 PM)
    end: new Date(2023, 7, 15, 16, 0) // Add time here (4:00 PM)
  }
];

const DoctorCalendar = () => {
  const { currentUser } = useAuth();

  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""});
  const [allEvent, setAllEvent] = useState(events);

  return (
    <div>
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
    </div>
  )
}

export default DoctorCalendar
