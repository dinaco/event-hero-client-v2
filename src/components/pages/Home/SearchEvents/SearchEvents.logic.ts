import { useEffect, useState } from 'react';
import useServerAPI from '../../../../configurations/API/ServerAPI';
import type { Event } from '../../../../utilities/GlobalTypes';

const useSearchEvents = () => {
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

  return {
    isLoading,
    events,
    searchEvents,
    setSearchEvents,
  };
};

export default useSearchEvents;
