import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import { eventsQueriesVars } from '../../utilities/react-query/constants';
import useServerAPI from '../../configurations/API/ServerAPI';
import useDebounce from '../Debounce';
import ReactQueryHelper from '../../utilities/react-query/ReactQueryHelper';
import { Event } from '../../utilities/GlobalTypes';

export const useInfiniteEventsQuery = (searchEvents = '') => {
  const { fetchRequest } = useServerAPI();
  const debouncedSearchTerm = useDebounce(searchEvents, 200);
  const { endPoint } = eventsQueriesVars.multipleEvents;
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ReactQueryHelper.getQueryKeyForeMultipleEvents(debouncedSearchTerm),
    ({ pageParam = 0 }) =>
      fetchRequest(
        'GET',
        `${endPoint}?limit=2&page=${pageParam}&q=${searchEvents}`
      ),
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data: data?.pages, fetchNextPage, hasNextPage };
};

export const useSingleEventQuery = (eventId: Pick<Event, 'id'>) => {
  const { fetchRequest } = useServerAPI();
  const { endPoint } = eventsQueriesVars.singleEvent;
  const { data } = useQuery(
    ReactQueryHelper.getQueryKeyForSingleEvent(eventId),
    () => fetchRequest('GET', `${endPoint}${eventId}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data };
};

export const useSingleEventUpdate = (eventId: string | undefined) => {
  const queryClient = useQueryClient();
  const { fetchRequest } = useServerAPI();
  const { endPoint } = eventsQueriesVars.singleEvent;
  const { mutate } = useMutation(
    (body: any) => fetchRequest('PUT', `${endPoint}${eventId}`, body),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { mutate, queryClient };
};

export const useUserEventsQuery = () => {
  const { fetchRequest } = useServerAPI();
  const { endPoint } = eventsQueriesVars.userEvents;
  const { data } = useQuery(
    ReactQueryHelper.getQueryKeyForUserEvents(),
    () => fetchRequest('GET', endPoint),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data };
};
