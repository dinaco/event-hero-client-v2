import { useQuery } from '@tanstack/react-query';
import useServerAPI from '../../configurations/API/ServerAPI';
import ReactQueryHelper from '../../utilities/ReactQueryHelper';
import { ordersQueriesVars } from './OrdersQueriesHooks.static';

export const useMultipleOrdersQuery = (eventId: string | undefined) => {
  const { fetchRequest } = useServerAPI();
  const { endPoint } = ordersQueriesVars.multipleOrders;
  const { data } = useQuery(
    ReactQueryHelper.getQueryKeyForSingleEventOrders(eventId),
    () => fetchRequest('GET', `${endPoint}${eventId}`),
    {
      enabled: !!eventId,
    }
  );
  return { data };
};
