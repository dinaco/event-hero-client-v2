import { useState } from 'react';
import { useEventsQuery } from '../../../../hooks/EventsQuery/EventsQuery';

const useSearchEvents = () => {
  const [searchEvents, setSearchEvents] = useState<string>('');

  const { data: events, isLoading } = useEventsQuery(searchEvents);

  return {
    isLoading,
    events,
    searchEvents,
    setSearchEvents,
  };
};

export default useSearchEvents;
