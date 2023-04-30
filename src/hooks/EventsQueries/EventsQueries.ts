import { useQuery } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import { eventsQueriesVars } from '../../utilities/react-query/constants';
import useServerAPI from '../../configurations/API/ServerAPI';
import useDebounce from '../Debounce';

export const useMultipleEventsQuery = (searchEvents = '') => {
  const { fetchRequest } = useServerAPI();
  const debouncedSearchTerm = useDebounce(searchEvents, 200);
  const { queryKeys, url } = eventsQueriesVars.multipleEvents;
  const { data, isLoading } = useQuery(
    [queryKeys, debouncedSearchTerm],
    () => fetchRequest(`${url}?q=${searchEvents}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data, isLoading };
};

export const useSingleEventQuery = (eventId: string | undefined) => {
  const { fetchRequest } = useServerAPI();
  const { queryKeys, url } = eventsQueriesVars.singleEvent;
  const { data, isLoading } = useQuery(
    [queryKeys, eventId],
    () => fetchRequest(`${url}${eventId}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data, isLoading };
};

export const useUserEventsQuery = () => {
  const { fetchRequest } = useServerAPI();
  const { queryKeys, url } = eventsQueriesVars.userEvent;
  const { data, isLoading } = useQuery([queryKeys], () => fetchRequest(url), {
    onError: (error: any) =>
      SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
  });
  return { data, isLoading };
};
