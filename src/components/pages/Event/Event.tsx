import { Typography } from '@mui/material';
import LoadingImg from '../../global/atoms/LoadingImg';
import EventCard from '../../organism/EventCard';
import useEvent from './Event.logic';

function Event() {
  const { eventInfo, isLoading } = useEvent();

  if (isLoading) {
    return <LoadingImg />;
  }

  if (!eventInfo) {
    return <Typography variant='h2'>We could not find this event!</Typography>;
  }

  return <EventCard {...eventInfo} />;
}

export default Event;
