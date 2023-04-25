import { useState } from 'react';
import type { LoginFields } from '../../components/pages/Auth/Login/Login.logic';
import type { SignUpFields } from '../../components/pages/Auth/SignUp/SignUp.logic';
import SnackBar from '../../utilities/SnackBar';

enum Path {
  Login = '/auth/login',
  SignUp = '/auth/signup',
  Verify = '/auth/verify',
}

type HttpMethod = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS' | 'PATCH';

type AuthHeaders = {
  headers: {
    Authorization: string;
  };
};

const useServerAPI = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getAuthToken = localStorage.getItem('authToken');

  const bearerToken = {
    headers: {
      Authorization: `Bearer ${getAuthToken}`,
    },
  };

  const prepareOptions = (method: HttpMethod, body: any): RequestInit => {
    const options = { method, ...bearerToken };

    if (body) {
      return {
        ...options,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    return options;
  };

  async function fetchRequest(url: string) {
    const options = prepareOptions('GET', null);
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        { ...options }
      );
      return response.json();
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function postRequest<T>(url: string, body: T) {
    const options = prepareOptions('POST', body);
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        { ...options }
      );
      return response.json();
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function putRequest<T>(url: string, body: T) {
    const options = prepareOptions('PUT', body);
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        { ...options }
      );
      return response.json();
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteRequest(url: string) {
    const options = prepareOptions('DELETE', null);
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        { ...options }
      );
      return response.json();
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function verifyAuthToken(bearerToken: AuthHeaders) {
    const options = prepareOptions('GET', null);
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}${Path.Verify}`,
        { ...options, ...bearerToken }
      );
      return response.json();
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function userLogin(body: LoginFields) {
    const options = prepareOptions('POST', body);
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}${Path.Login}`,
        { ...options }
      );
      return response.json();
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function userSignUp(body: SignUpFields) {
    const options = prepareOptions('POST', body);
    try {
      setIsLoading(true);
      await fetch(`${import.meta.env.VITE_BASE_API_URL}${Path.SignUp}`, {
        ...options,
      });
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
