import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import useServerAPI from '../../configurations/API/ServerAPI';
import useDebounce from '../Debounce';
import ReactQueryHelper from '../../utilities/ReactQueryHelper';
import { Event } from '../../utilities/GlobalTypes';
import { eventsQueriesVars } from './EventsQueriesHooks.static';

export const useInfiniteEventsQuery = (searchEvents = '') => {
  const { fetchRequest } = useServerAPI();
  const debouncedSearchTerm = useDebounce(searchEvents, 200);
  const { endPoint, limitEventsInfiniteQuery } =
    eventsQueriesVars.multipleEvents;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ReactQueryHelper.getQueryKeyForeMultipleEvents(debouncedSearchTerm),
      ({ pageParam = 1 }) =>
        fetchRequest(
          'GET',
          `${endPoint}?limit=${limitEventsInfiniteQuery}&page=${pageParam}&q=${searchEvents}`
        ),
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  return { data: data?.pages, fetchNextPage, hasNextPage, isFetchingNextPage };
};

export const useSingleEventQuery = (eventId?: Pick<Event, 'id'>) => {
  const { fetchRequest } = useServerAPI();
  const { endPoint } = eventsQueriesVars.singleEvent;
  const { data } = useQuery(
    ReactQueryHelper.getQueryKeyForSingleEvent(eventId),
    () => fetchRequest('GET', `${endPoint}${eventId}`),
    {
      enabled: !!eventId,
    }
  );
  return { data };
};

export const useSingleEventUpdate = (eventId: string | undefined) => {
  const queryClient = useQueryClient();
  const { fetchRequest } = useServerAPI();
  const { endPoint } = eventsQueriesVars.singleEvent;
  const { mutate } = useMutation((body: any) =>
    fetchRequest('PUT', `${endPoint}${eventId}`, body)
  );
  return { mutate, queryClient };
};

export const useUserEventsQuery = () => {
  const { fetchRequest } = useServerAPI();
  const { endPoint } = eventsQueriesVars.userEvents;
  const { data } = useQuery(ReactQueryHelper.getQueryKeyForUserEvents(), () =>
    fetchRequest('GET', endPoint)
  );
  return { data };
};
