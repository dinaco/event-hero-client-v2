import { useQuery } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import { prepareQueryOptions } from '../../utilities/prepareQueryOptions';
import { queryKeys } from '../../utilities/react-query/constants';

async function fetchEvents(searchEvents: string) {
  const options = prepareQueryOptions('GET', null);
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}/api/events?q=${searchEvents}`,
    {
      ...options,
    }
  );
  return response.json();
}

export const useEventsQuery = (searchEvents: string) =>
  useQuery([queryKeys.events, searchEvents], () => fetchEvents(searchEvents), {
    onError: (error: any) =>
      SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
  });
