import { TextField, Typography } from '@mui/material';
import LoadingImg from '../../../global/atoms/LoadingImg';
import EventsList from '../../../organism/EventsList/EventsList';
import { localText } from './SearchEvents.static';
import useSearchEvents from './SearchEvents.logic';

function SearchEvents() {
  const { isLoading, events, searchEvents, setSearchEvents } =
    useSearchEvents();

  if (isLoading) {
    return <LoadingImg />;
  }

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
