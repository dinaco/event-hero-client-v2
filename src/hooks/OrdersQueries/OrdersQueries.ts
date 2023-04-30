import { useQuery } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import { ordersQueriesVars } from '../../utilities/react-query/constants';
import useServerAPI from '../../configurations/API/ServerAPI';

export const useMultipleOrdersQuery = (eventId: string | undefined) => {
  const { fetchRequest } = useServerAPI();
  const { queryKeys, url } = ordersQueriesVars.multipleOrders;
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
