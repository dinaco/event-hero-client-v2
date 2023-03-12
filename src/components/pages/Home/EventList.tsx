import { TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useServerAPI from '../../../configurations/API/ServerAPI';
import LoadingImg from '../../global/atoms/LoadingImg';
import EventsList from '../../organism/EventsList/EventsList';

function EventList() {
  const [events, setEvents] = useState([]);
  const [searchEvents, setSearchEvents] = useState('');
  const handleSearch = (e) => setSearchEvents(e.target.value);

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
      <Typography variant='h5' gutterBottom component='div'>
        Check out our great events!
      </Typography>
      <TextField
        label='Search Events'
        variant='outlined'
        onChange={handleSearch}
        value={searchEvents}
        fullWidth
      />
      <EventsList selectedTab={3} userEvents={events} />
    </>
  );
}

export default EventList;
