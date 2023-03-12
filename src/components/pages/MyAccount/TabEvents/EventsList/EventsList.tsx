import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import EventCard from '../../../../organism/EventCard';
import type { Event } from '../../../../../utilities/GlobalTypes';
import useEventsList from './EventsList.logic';

type Props = {
  selectedTab: number;
  userEvents: Event[];
};

function EventsList({ selectedTab, userEvents }: Props) {
  const { eventInfo } = useEventsList({ userEvents });

  if (!eventInfo[selectedTab].events.length) {
    return (
      <Typography>
        {eventInfo[selectedTab].noEventsText}
        <Link to={`/`}>Check out our events!</Link>
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
