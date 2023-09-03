import { useContext, useState } from 'react';
import type { HandleClickAuthForm } from '../TabbedAuthForm.static';
import type { SignUpFields } from '../SignUp/SignUp.logic';
import useServerAPI from '../../../../configurations/API/ServerAPI';
import { AuthContext } from '../../../../context/auth.context';
import { useUserLogin } from '../../../../hooks/AuthQueries/AuthQueriesHooks';

export type LoginFields = Pick<SignUpFields, 'email' | 'password'>;

export const useLogin = () => {
  const { loginUser } = useContext(AuthContext);
  const [loginInfo, setLoginInfo] = useState<LoginFields>({
    email: '',
    password: '',
  });
  const { userLogin } = useServerAPI();
  const { refetch } = useUserLogin(loginInfo);

  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();

    refetch();
  };
  return {
    loginInfo,
    setLoginInfo,
    handleSubmit,
  };
};

const LoginLogic = {
  useLogin,
};

export default LoginLogic;
