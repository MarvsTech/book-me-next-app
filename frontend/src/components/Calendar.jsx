import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
 
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }
  };

  const EventItem = ({ info }) => {
    const { event } = info;
    return (
      <div>
        <p>{event.title}</p>
      </div>
    );
  };

  return (
    <FullCalendar
    viewClassNames='calendar-modal'
    editable
    selectable
    events={events}
    select={handleSelect}
    headerToolbar={{
      start: "today prev next",
      center: "title",
      end: "dayGridMonth dayGridWeek dayGridDay",
    }}
    eventContent={(info) => <EventItem info={info} />}
    plugins={[daygridPlugin, interactionPlugin]}
    views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
    showNonCurrentDates={false}
    fixedWeekCount={false}
    />
  )
}

export default Calendar