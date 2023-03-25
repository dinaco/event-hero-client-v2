import { useEffect, useState } from 'react';
import useServerAPI from '../../../configurations/API/ServerAPI';
import type { UserInfo } from '../../../utilities/GlobalTypes';

function useMyAccount() {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const { fetchRequest } = useServerAPI();

  useEffect(() => {
    fetchRequest('/api/my-events').then((response) =>
      setUserInfo(response?.data)
    );
  }, []);

  return { userInfo };
}

export default useMyAccount;
