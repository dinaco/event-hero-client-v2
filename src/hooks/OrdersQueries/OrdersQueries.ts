import { useQuery } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import { ordersQueriesVars } from '../../utilities/react-query/constants';
import useServerAPI from '../../configurations/API/ServerAPI';
import ReactQueryHelper from '../../utilities/react-query/ReactQueryHelper';
import { Event } from '../../utilities/GlobalTypes';

export const useMultipleOrdersQuery = (eventId: Pick<Event, 'id'>) => {
  const { fetchRequest } = useServerAPI();
  const { endPoint } = ordersQueriesVars.multipleOrders;
  const { data } = useQuery(
    ReactQueryHelper.getQueryKeyForSingleEventOrders(eventId),
    () => fetchRequest('GET', `${endPoint}${eventId}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
    }
  );
  return { data };
};
