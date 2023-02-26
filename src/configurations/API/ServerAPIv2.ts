import axios from 'axios';
import { useContext } from 'react';
import type { LoginFields } from '../../components/global/Login/Login.logic';
import type { SignUpFields } from '../../components/global/SignUp/SignUp.logic';
import { AuthContext } from '../../context/auth.context';
import SnackBar from '../../utilities/SnackBar';

enum Path {
  Login = '/auth/login',
  SignUp = '/auth/signup',
  Verify = '/auth/verify',
}

type AuthHeaders = {
  headers: {
    Authorization: string;
  };
};

const useServerAPIv2 = () => {
  const { authenticateUser, storeToken, loginUser } = useContext(AuthContext);

  async function fetchRequest(url: string) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}${url}`
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }

  async function postRequest<T>(url: string, body: T) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        {
          ...body,
        }
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }

  async function verifyAuthToken(bearerToken: AuthHeaders) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}${Path.Verify}`,
        {
          ...bearerToken,
        }
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }

  async function userLogin(body: LoginFields) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}${Path.Login}`,
        {
          ...body,
        }
      );
      loginUser(response?.data.authToken);
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }

  async function userSignUp(body: SignUpFields) {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_API_URL}${Path.SignUp}`, {
        ...body,
      });
      userLogin(body);
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }

  return {
    fetchRequest,
    postRequest,
    verifyAuthToken,
    userLogin,
    userSignUp,
  };
};

export default useServerAPIv2;
