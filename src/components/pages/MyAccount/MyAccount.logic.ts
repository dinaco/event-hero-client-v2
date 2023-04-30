import useServerAPI from '../../../configurations/API/ServerAPI';
import { useQuery } from '@tanstack/react-query';

function useMyAccount() {
  const { fetchRequest } = useServerAPI();

  const { data: UserInfo, isLoading } = useQuery(['myAccount'], () =>
    fetchRequest('/api/my-events')
  );

  return { UserInfo, isLoading };
}

export default useMyAccount;
