import { useQuery } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import { ordersQueriesVars } from '../../utilities/react-query/constants';
import useServerAPI from '../../configurations/API/ServerAPI';

export const useMultipleOrdersQuery = (eventId: string | undefined) => {
  const { fetchRequest } = useServerAPI();
  const { queryKey: queryKey, endPoint } = ordersQueriesVars.multipleOrders;
  const { data } = useQuery(
    [queryKey, eventId],
    () => fetchRequest('GET', `${endPoint}${eventId}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data };
};
