import { useState } from 'react';
import type {
  HandleChangeAuthForm,
  HandleClickAuthForm,
} from '../TabbedAuthForm.static';
import type { SignUpFields } from '../SignUp/SignUp.logic';
import useServerAPIv2 from '../../../configurations/API/ServerAPIv2';

export type LoginFields = Pick<SignUpFields, 'email' | 'password'>;

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userLogin } = useServerAPIv2();

  const handleEmail = (e: HandleChangeAuthForm) => setEmail(e.target.value);
  const handlePassword = (e: HandleChangeAuthForm) =>
    setPassword(e.target.value);
  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();
    const body: LoginFields = { email, password };

    userLogin(body)
      .then(() => {
        setPassword('');
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  return {
    email,
    password,
    handleEmail,
    handlePassword,
    handleSubmit,
  };
};

const LoginLogic = {
  useLogin,
};

export default LoginLogic;
