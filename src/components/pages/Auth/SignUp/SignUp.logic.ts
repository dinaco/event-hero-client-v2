import { useState } from 'react';
import useServerAPI from '../../../../configurations/API/ServerAPI';
import type { HandleClickAuthForm } from '../TabbedAuthForm.static';

export type SignUpFields = {
  name: string;
  email: string;
  password: string;
};

export const useSignUp = () => {
  const [registrationInfo, setRegistrationInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { userSignUp } = useServerAPI();

  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();

    userSignUp(registrationInfo).then(() =>
      setRegistrationInfo({
        name: '',
        email: '',
        password: '',
      })
    );
  };
  return {
    registrationInfo,
    setRegistrationInfo,
    handleSubmit,
  };
};

const SignUpLogic = {
  useSignUp,
};

export default SignUpLogic;
