import { useQuery } from '@tanstack/react-query';
import useServerAPI from '../../configurations/API/ServerAPI';
import ReactQueryHelper from '../../utilities/ReactQueryHelper';
import { authQueriesVars } from './AuthQueriesHooks.static';
import type { LoginFields } from '../../components/pages/Auth/Login/Login.logic';
import type { SignUpFields } from '../../components/pages/Auth/SignUp/SignUp.logic';

export const useUserLogin = (body: LoginFields) => {
  const { fetchRequest } = useServerAPI();
  const { endPoint } = authQueriesVars.login;
  const { data } = useQuery(ReactQueryHelper.getQueryKeyForUserLogin(), () =>
    fetchRequest('POST', `${endPoint}`, body)
  );
  return { data };
};
