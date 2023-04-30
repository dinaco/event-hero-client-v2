import { useUserEventsQuery } from '../../../hooks/EventsQueries/EventsQueries';

function useMyAccount() {
  const { data: UserInfo, isLoading } = useUserEventsQuery();

  return { UserInfo, isLoading };
}

export default useMyAccount;
