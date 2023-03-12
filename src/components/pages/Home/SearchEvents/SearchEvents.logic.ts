import { useEffect, useState } from 'react';
import useServerAPI from '../../../../configurations/API/ServerAPI';

const useSearchEvents = () => {
  const [userEvents, setUserEvents] = useState<Event[]>([]);
  const [searchEvents, setSearchEvents] = useState<string>('');

  const { isLoading, fetchRequest } = useServerAPI();

  useEffect(() => {
    fetchRequest(`/api/events?q=${searchEvents}`)
      .then((response) => {
        setUserEvents(response?.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [searchEvents]);

  return {
    isLoading,
    userEvents,
    searchEvents,
    setSearchEvents,
  };
};

export default useSearchEvents;
