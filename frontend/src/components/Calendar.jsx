import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
 
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Calendar = () => {
  // const [events, setEvents] = useState([]);

  // const handleSelect = (info) => {
  //   const { start, end } = info;
  //   const eventNamePrompt = prompt("Enter, event name");
  //   if (eventNamePrompt) {
  //     setEvents([
  //       ...events,
  //       {
  //         start,
  //         end,
  //         title: eventNamePrompt,
  //         id: uuid(),
  //       },
  //     ]);
  //   }
  // };

  // const EventItem = ({ info }) => {
  //   // const { event } = info;
  //   return (
  //     <div>
  //       <p>{info.event.title}</p>
  //     </div>
  //   );
  // };
 
    function Event (eventInfo) {
      return (
        <div>
          <p>{eventInfo.event.eventTitle}</p>
          <p>{eventInfo.event.time}</p>
        </div>
      )
    }

    return (
      <div>
        <FullCalendar
        viewClassNames='calendar-modal'
        // editable
        // selectable
        // events={events}
        // select={handleSelect}
        headerToolbar={{
          start: "today prev next",
          center: "title",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        // eventContent={(info) => <EventItem info={info} />}
        plugins={[daygridPlugin, interactionPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        showNonCurrentDates={false}
        fixedWeekCount={false}
        eventContent={Event}
        events={[
          {date : '2023-09-09', title : 'Morning Appointment', time : '8:00 AM - 9:30 AM'},
          {date : '2023-09-09', title : 'Afternoon Appointment', time : '1:30 AM - 3:00 AM'},
          {date : '2023-09-09', title : 'Afternoon Appointment', time : '3:00 AM - 4:30 AM'},
        ]}
        />
      </div>
    )
}

  

export default Calendar