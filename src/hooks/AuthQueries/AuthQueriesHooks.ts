import { useMutation } from '@tanstack/react-query';
import useServerAPI from '../../configurations/API/ServerAPI';
import ReactQueryHelper from '../../utilities/ReactQueryHelper';
import { authQueriesVars } from './AuthQueriesHooks.static';
import type { LoginFields } from '../../components/pages/Auth/Login/Login.logic';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

type LoginSuccess = {
  authToken: string;
};

export const useUserLogin = (body: LoginFields) => {
  const { loginUser } = useContext(AuthContext);
  const { fetchRequest } = useServerAPI();
  const { endPoint } = authQueriesVars.login;
  const { mutate: loginMutation } = useMutation(
    ReactQueryHelper.getQueryKeyForUserLogin(),
    () => fetchRequest('POST', endPoint, body),
    {
      onSuccess(data: LoginSuccess) {
        loginUser(data.authToken);
      },
    }
  );
  return { loginMutation };
};
