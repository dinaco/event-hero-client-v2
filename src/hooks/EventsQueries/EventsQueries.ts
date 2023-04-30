import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import { eventsQueriesVars } from '../../utilities/react-query/constants';
import useServerAPI from '../../configurations/API/ServerAPI';
import useDebounce from '../Debounce';

export const useMultipleEventsQuery = (searchEvents = '') => {
  const { fetchRequest } = useServerAPI();
  const debouncedSearchTerm = useDebounce(searchEvents, 200);
  const { queryKey: queryKey, url } = eventsQueriesVars.multipleEvents;
  const { data, isLoading } = useQuery(
    [queryKey, debouncedSearchTerm],
    () => fetchRequest('GET', `${url}?q=${searchEvents}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data, isLoading };
};

export const useSingleEventQuery = (eventId: string | undefined) => {
  const { fetchRequest } = useServerAPI();
  const { queryKey: queryKey, url } = eventsQueriesVars.singleEvent;
  const { data, isLoading } = useQuery(
    [queryKey, eventId],
    () => fetchRequest('GET', `${url}${eventId}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data, isLoading };
};

export const useSingleEventUpdate = (eventId: string | undefined) => {
  const queryClient = useQueryClient();
  const { fetchRequest } = useServerAPI();
  const { url } = eventsQueriesVars.singleEvent;
  const { mutate, isLoading } = useMutation(
    (body: any) => fetchRequest('PUT', `${url}${eventId}`, body),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { mutate, isLoading, queryClient };
};

export const useUserEventsQuery = () => {
  const { fetchRequest } = useServerAPI();
  const { queryKey: queryKey, url } = eventsQueriesVars.userEvent;
  const { data, isLoading } = useQuery(
    [queryKey],
    () => fetchRequest('GET', url),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data, isLoading };
};
