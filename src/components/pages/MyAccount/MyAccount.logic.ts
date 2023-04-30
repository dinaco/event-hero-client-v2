import useServerAPI from '../../../configurations/API/ServerAPI';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../../utilities/react-query/constants';

function useMyAccount() {
  const { fetchRequest } = useServerAPI();

  const { data: UserInfo, isLoading } = useQuery([queryKeys.myAccount], () =>
    fetchRequest('/api/my-events')
  );

  return { UserInfo, isLoading };
}

export default useMyAccount;
