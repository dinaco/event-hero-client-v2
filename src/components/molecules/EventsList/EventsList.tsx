import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import EventCard from '../../organism/EventCard';
import type { Event } from '../../../utilities/GlobalTypes';

type Props = {
  selectedTab: number;
  userEvents: Event[];
};

type EventInfo = {
  [key: number]: {
    events: Event[];
    text: string;
  };
};

function EventsList({ selectedTab, userEvents }: Props) {
  const today = dayjs(new Date()).format();

  const todayDate = dayjs(today.split('T')[0]);

  const todaysEvents = userEvents.filter((event) =>
    todayDate.isSame(event.date.split('T')[0])
  );

  const upcomingEvents = userEvents.filter((event) =>
    todayDate.isBefore(event.date.split('T')[0])
  );

  const pastEvents = userEvents.filter((event) =>
    todayDate.isAfter(event.date.split('T')[0])
  );

  const eventInfo: EventInfo = {
    0: {
      events: todaysEvents,
      text: 'No events going on today.',
    },
    1: {
      events: upcomingEvents,
      text: 'No upcoming events.',
    },
    2: {
      events: pastEvents,
      text: "You haven't been in any events yet.",
    },
  };

  if (!eventInfo[selectedTab].events.length) {
    return (
      <Typography variant='body1'>
        {eventInfo[selectedTab].text}
        <Link to={`/events`}>Check out our events!</Link>
      </Typography>
    );
  }

  return (
    <>
      {eventInfo[selectedTab].events.map((event) => (
        <EventCard key={event.id} eventInfo={event} />
      ))}
    </>
  );
}

export default EventsList;
