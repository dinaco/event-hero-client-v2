import { useState } from 'react';
import useServerAPIv2 from '../../../configurations/API/ServerAPIv2';
import type {
  HandleChangeAuthForm,
  HandleClickAuthForm,
} from '../TabbedAuthForm.static';

export type SignUpFields = {
  email: string;
  name: string;
  password: string;
};

export const useSignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { userSignUp } = useServerAPIv2();

  const handleEmail = (e: HandleChangeAuthForm) => setEmail(e.target.value);
  const handleName = (e: HandleChangeAuthForm) => setName(e.target.value);
  const handlePassword = (e: HandleChangeAuthForm) =>
    setPassword(e.target.value);
  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();
    const body: SignUpFields = { email, password, name };

    userSignUp(body)
      .then(() => {
        setPassword('');
        // handleChange(e, 0); use this approach if you want to switch to login tab after sucessful signup
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  return {
    name,
    email,
    password,
    handleName,
    handleEmail,
    handlePassword,
    handleSubmit,
  };
};

const SignUpLogic = {
  useSignUp,
};

export default SignUpLogic;
