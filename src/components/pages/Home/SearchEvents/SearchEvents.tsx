import { TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useServerAPI from '../../../../configurations/API/ServerAPI';
import LoadingImg from '../../../global/atoms/LoadingImg';
import EventsList from '../../../organism/EventsList/EventsList';
import type { Event } from '../../../../utilities/GlobalTypes';
import { localText } from './SearchEvents.static';

function SearchEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchEvents, setSearchEvents] = useState<string>('');

  const { isLoading, fetchRequest } = useServerAPI();

  useEffect(() => {
    fetchRequest(`/api/events?q=${searchEvents}`)
      .then((response) => {
        setEvents(response?.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [searchEvents]);

  if (isLoading) {
    return <LoadingImg />;
  }

  return (
    <>
      <Typography variant='h5' gutterBottom>
        {localText.title}
      </Typography>
      <TextField
        label={localText.searchPlaceHolder}
        onChange={(e) => setSearchEvents(e.target.value)}
        value={searchEvents}
        fullWidth
      />
      <EventsList selectedTab={3} userEvents={events} />
    </>
  );
}

export default SearchEvents;
