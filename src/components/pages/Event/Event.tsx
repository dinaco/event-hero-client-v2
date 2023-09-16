import { Typography } from '@mui/material';
import EventCard from '../../organism/EventCard';
import { useParams } from 'react-router-dom';
import { useSingleEventQuery } from '../../../hooks/EventsQueries/EventsQueriesHooks';

function Event() {
  const { eventId } = useParams();
  const { data: eventInfo } = useSingleEventQuery(eventId ?? '');

  if (!eventInfo) {
    return <Typography variant='h2'>We could not find this event!</Typography>;
  }

  return <EventCard {...eventInfo} />;
}

export default Event;
