import { useQuery } from '@tanstack/react-query';
import SnackBar from '../../utilities/SnackBar';
import useServerAPI from '../../configurations/API/ServerAPI';
import ReactQueryHelper from '../../utilities/ReactQueryHelper';
import { authQueriesVars } from './AuthQueriesHooks.static';

export const useMultipleOrdersQuery = (eventId: string | undefined) => {
  const { fetchRequest } = useServerAPI();
  const { endPoint } = authQueriesVars.signIn;
  const { data } = useQuery(
    ReactQueryHelper.getQueryKeyForUserSignIn(eventId),
    () => fetchRequest('GET', `${endPoint}${eventId}`),
    {
      onError: (error: any) =>
        SnackBar({ message: error.response.data.errorMessage, type: 'error' }),
      enabled: !!eventId,
    }
  );
  return { data };
};
