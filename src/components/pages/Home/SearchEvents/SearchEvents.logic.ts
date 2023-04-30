import { useState } from 'react';
import { useMultipleEventsQuery } from '../../../../hooks/EventsQuery/EventsQuery';

const useSearchEvents = () => {
  const [searchEvents, setSearchEvents] = useState<string>('');

  const { data: events, isLoading } = useMultipleEventsQuery(searchEvents);

  return {
    isLoading,
    events,
    searchEvents,
    setSearchEvents,
  };
};

export default useSearchEvents;
