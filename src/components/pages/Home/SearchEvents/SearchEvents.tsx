import { Button, TextField, Typography } from '@mui/material';
import { localText } from './SearchEvents.static';
import useSearchEvents from './SearchEvents.logic';
import EventCard from '../../../organism/EventCard';

function SearchEvents() {
  const {
    events,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    searchEvents,
    setSearchEvents,
  } = useSearchEvents();

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
      {events?.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
      {isFetchingNextPage && <p>Loading More Events...</p>}
      <Button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        {'Fetch More'}
      </Button>
    </>
  );
}

export default SearchEvents;
