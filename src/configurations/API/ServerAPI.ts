import axios from 'axios';
import { useContext, useState } from 'react';
import type { LoginFields } from '../../components/pages/Auth/Login/Login.logic';
import type { SignUpFields } from '../../components/pages/Auth/SignUp/SignUp.logic';
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

const useServerAPI = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { loginUser } = useContext(AuthContext);

  const getAuthToken = localStorage.getItem('authToken');

  const bearerToken = {
    headers: {
      Authorization: `Bearer ${getAuthToken}`,
    },
  };

  async function fetchRequest(url: string) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        bearerToken
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function postRequest<T>(url: string, body: T) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        body,
        bearerToken
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function putRequest<T>(url: string, body: T) {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        body,
        bearerToken
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteRequest<T>(url: string) {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        bearerToken
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function verifyAuthToken(bearerToken: AuthHeaders) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}${Path.Verify}`,
        bearerToken
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function userLogin(body: LoginFields) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}${Path.Login}`,
        body
      );
      loginUser(response?.data.authToken);
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function userSignUp(body: SignUpFields) {
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}${Path.SignUp}`,
        body
      );
      userLogin(body);
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    deleteRequest,
    fetchRequest,
    postRequest,
    putRequest,
    verifyAuthToken,
    userLogin,
    userSignUp,
  };
};

export default useServerAPI;
