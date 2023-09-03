import { useQuery } from '@tanstack/react-query';
import useServerAPI from '../../configurations/API/ServerAPI';
import ReactQueryHelper from '../../utilities/ReactQueryHelper';
import { authQueriesVars } from './AuthQueriesHooks.static';
import type { LoginFields } from '../../components/pages/Auth/Login/Login.logic';
import type { SignUpFields } from '../../components/pages/Auth/SignUp/SignUp.logic';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

type LoginSuccess = {
  authToken: string;
};

export const useUserLogin = (body: LoginFields) => {
  const { loginUser } = useContext(AuthContext);
  const { fetchRequest } = useServerAPI();
  const { endPoint } = authQueriesVars.login;
  const { isLoading, refetch } = useQuery(
    ReactQueryHelper.getQueryKeyForUserLogin(),
    () => fetchRequest('POST', `${endPoint}`, body),
    {
      cacheTime: 0,
      enabled: false,
      onSuccess(data: LoginSuccess) {
        loginUser(data.authToken);
      },
      networkMode: 'online',
      retry: false,
    }
  );
  return { isLoading, refetch };
};
