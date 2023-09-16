import { useState } from 'react';
import type { HandleClickAuthForm } from '../TabbedAuthForm.static';
import type { SignUpFields } from '../SignUp/SignUp.logic';
import { useUserLogin } from '../../../../hooks/AuthQueries/AuthQueriesHooks';

export type LoginFields = Pick<SignUpFields, 'email' | 'password'>;

export const useLogin = () => {
  const [loginInfo, setLoginInfo] = useState<LoginFields>({
    email: '',
    password: '',
  });
  const { loginMutation } = useUserLogin(loginInfo);

  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();
    loginMutation();
  };
  return {
    loginInfo,
    setLoginInfo,
    handleSubmit,
  };
};

export default useLogin;
