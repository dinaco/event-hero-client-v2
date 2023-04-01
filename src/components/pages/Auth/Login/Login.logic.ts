import { useState } from 'react';
import type { HandleClickAuthForm } from '../TabbedAuthForm.static';
import type { SignUpFields } from '../SignUp/SignUp.logic';
import useServerAPI from '../../../../configurations/API/ServerAPI';

export type LoginFields = Pick<SignUpFields, 'email' | 'password'>;

export const useLogin = () => {
  const [loginInfo, setLoginInfo] = useState<LoginFields>({
    email: '',
    password: '',
  });
  const { userLogin } = useServerAPI();

  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();

    userLogin(loginInfo).then(() =>
      setLoginInfo({
        email: '',
        password: '',
      })
    );
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
