import { useQuery } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import { prepareQueryOptions } from '../../utilities/prepareQueryOptions';
import { queryVars } from '../../utilities/react-query/constants';

async function fetchRequest(endPointUrl: string) {
  const options = prepareQueryOptions('GET', null);
  const response = await fetch(
    `${import.meta.env.VITE_BASE_API_URL}${endPointUrl}`,
    {
      ...options,
    }
  );
  return response.json();
}

export const useMultipleEventsQuery = (searchEvents = '') => {
  const { queryKeys, url } = queryVars.multipleEvents;
  const { data, isLoading } = useQuery(
    [queryKeys, searchEvents],
    () => fetchRequest(`${url}?q=${searchEvents}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data, isLoading };
};

export const useSingleEventQuery = (eventId: string | undefined) => {
  const { queryKeys, url } = queryVars.singleEvent;
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
  const { queryKeys, url } = queryVars.userEvent;
  const { data, isLoading } = useQuery([queryKeys], () => fetchRequest(url), {
    onError: (error: any) =>
      SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
  });
  return { data, isLoading };
};
