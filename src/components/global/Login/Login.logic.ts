import { useState } from 'react';
import type {
  HandleChangeAuthForm,
  HandleClickAuthForm,
} from '../TabbedAuthForm.static';
import type { SignUpFields } from '../SignUp/SignUp.logic';
import ServerAPI from '../../../configurations/API/ServerAPI';

export type LoginFields = Pick<SignUpFields, 'email' | 'password'>;

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e: HandleChangeAuthForm) => setEmail(e.target.value);
  const handlePassword = (e: HandleChangeAuthForm) =>
    setPassword(e.target.value);
  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();
    const body: LoginFields = { email, password };

    ServerAPI.login(body)
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch((err) => console.error(err.response.data.errorMessage));
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
