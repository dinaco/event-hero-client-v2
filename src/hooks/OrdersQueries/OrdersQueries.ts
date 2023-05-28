import { useQuery } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import useServerAPI from '../../configurations/API/ServerAPI';
import ReactQueryHelper from '../../utilities/react-query/ReactQueryHelper';
import { ordersQueriesVars } from './OrdersQueries.static';

export const useMultipleOrdersQuery = (eventId: string | undefined) => {
  const { fetchRequest } = useServerAPI();
  const { endPoint } = ordersQueriesVars.multipleOrders;
  const { data } = useQuery(
    ReactQueryHelper.getQueryKeyForSingleEventOrders(eventId),
    () => fetchRequest('GET', `${endPoint}${eventId}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
      enabled: !!eventId,
    }
  );
  return { data };
};
