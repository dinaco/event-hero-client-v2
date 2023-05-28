import { useState } from 'react';
import { useInfiniteEventsQuery } from '../../../../hooks/EventsQueries/EventsQueriesHooks';
import { Event } from '../../../../utilities/GlobalTypes';

const useSearchEvents = () => {
  const [searchEvents, setSearchEvents] = useState('');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteEventsQuery(searchEvents);

  const events: Event[] | undefined = data?.map((items) => items.events).flat();

  return {
    events,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    searchEvents,
    setSearchEvents,
  };
};

export default useSearchEvents;
