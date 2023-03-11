import { useEffect, useState } from 'react';
import useServerAPIv2 from '../../../configurations/API/ServerAPIv2';
import type { UserInfo } from '../../../utilities/GlobalTypes';

function useMyAccount() {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const { fetchRequest } = useServerAPIv2();

  useEffect(() => {
    fetchRequest('/api/my-events')
      .then((response) => {
        setUserInfo(response?.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return { userInfo };
}

export default useMyAccount;
