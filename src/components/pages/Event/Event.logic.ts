import { useParams } from 'react-router-dom';
import { useSingleEventQuery } from '../../../hooks/EventsQueries/EventsQueries';

function useMyAccount() {
  const { eventId } = useParams();

  const { data: eventInfo, isLoading } = useSingleEventQuery(eventId);

  return { eventInfo, isLoading };
}

export default useMyAccount;
