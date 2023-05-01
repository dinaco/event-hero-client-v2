import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import { eventsQueriesVars } from '../../utilities/react-query/constants';
import useServerAPI from '../../configurations/API/ServerAPI';
import useDebounce from '../Debounce';

export const useMultipleEventsQuery = (searchEvents = '') => {
  const { fetchRequest } = useServerAPI();
  const debouncedSearchTerm = useDebounce(searchEvents, 200);
  const { queryKey, endPoint } = eventsQueriesVars.multipleEvents;
  const { data, isLoading } = useQuery(
    [eventsQueriesVars.rootName, queryKey, debouncedSearchTerm],
    () => fetchRequest('GET', `${endPoint}?q=${searchEvents}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data, isLoading };
};

export const useSingleEventQuery = (eventId: string | undefined) => {
  const { fetchRequest } = useServerAPI();
  const { queryKey: queryKey, endPoint } = eventsQueriesVars.singleEvent;
  const { data, isLoading } = useQuery(
    [eventsQueriesVars.rootName, queryKey, eventId],
    () => fetchRequest('GET', `${endPoint}${eventId}`),
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
  const { endPoint } = eventsQueriesVars.singleEvent;
  const { mutate, isLoading } = useMutation(
    (body: any) => fetchRequest('PUT', `${endPoint}${eventId}`, body),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { mutate, isLoading, queryClient };
};

export const useUserEventsQuery = () => {
  const { fetchRequest } = useServerAPI();
  const { queryKey: queryKey, endPoint } = eventsQueriesVars.userEvent;
  const { data, isLoading } = useQuery(
    [eventsQueriesVars.rootName, queryKey],
    () => fetchRequest('GET', endPoint),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data, isLoading };
};
