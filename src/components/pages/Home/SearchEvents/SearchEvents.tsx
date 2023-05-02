import { TextField, Typography } from '@mui/material';
import EventsList from '../../../organism/EventsList/EventsList';
import { localText } from './SearchEvents.static';
import { useMultipleEventsQuery } from '../../../../hooks/EventsQueries/EventsQueries';
import { useState } from 'react';

function SearchEvents() {
  const [searchEvents, setSearchEvents] = useState('');

  const { data: events } = useMultipleEventsQuery(searchEvents);

  return (
    <>
      <Typography variant='h5' gutterBottom>
        {localText.title}
      </Typography>
      <TextField
        autoFocus
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
