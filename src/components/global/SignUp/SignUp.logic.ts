import { useContext, useState } from "react";
import {
  HandleChangeAuthForm,
  HandleClickAuthForm,
} from "../TabbedAuthForm.static";
import API from "../../../configurations/API/API";

export type SignUpFields = {
  email: string;
  name: string;
  password: string;
};

export const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: HandleChangeAuthForm) => setEmail(e.target.value);
  const handleName = (e: HandleChangeAuthForm) => setName(e.target.value);
  const handlePassword = (e: HandleChangeAuthForm) =>
    setPassword(e.target.value);
  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();
    const body: SignUpFields = { email, password, name };
    API.signUp(body)
      .then((response) => {
        setEmail("");
        setPassword("");
      })
      .catch((err) => console.error(err.response.data.errorMessage));
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
