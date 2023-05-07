import { Button, TextField, Typography } from '@mui/material';
import EventsList from '../../../organism/EventsList/EventsList';
import { localText } from './SearchEvents.static';
import { useInfiniteEventsQuery } from '../../../../hooks/EventsQueries/EventsQueries';
import { useState } from 'react';

function SearchEvents() {
  const [searchEvents, setSearchEvents] = useState('');

  const {
    data: allPaginatedEvents,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteEventsQuery(searchEvents);

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
      {allPaginatedEvents?.map((eventsPerLimit, i) => (
        <EventsList
          key={i}
          selectedTab={3}
          userEvents={eventsPerLimit.events}
        />
      ))}

      <Button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        {'Fetch More'}
      </Button>
    </>
  );
}

export default SearchEvents;
