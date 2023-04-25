import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServerAPI from '../../../configurations/API/ServerAPI';
import type { Event } from '../../../utilities/GlobalTypes';

function useMyAccount() {
  const { eventId } = useParams();
  const [eventInfo, setEventInfo] = useState<Event>();

  const { fetchRequest, isLoading } = useServerAPI();

  useEffect(() => {
    fetchRequest(`/api/event/${eventId}`).then((response) =>
      setEventInfo(response)
    );
  }, []);

  return { eventInfo, isLoading };
}

export default useMyAccount;
