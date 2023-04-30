import { useUserEventsQuery } from '../../../hooks/EventsQuery/EventsQuery';

function useMyAccount() {
  const { data: UserInfo, isLoading } = useUserEventsQuery();

  return { UserInfo, isLoading };
}

export default useMyAccount;
