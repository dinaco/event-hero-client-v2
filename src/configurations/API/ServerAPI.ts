import axios from 'axios';
import type { LoginFields } from '../../components/global/Login/Login.logic';
import type { SignUpFields } from '../../components/global/SignUp/SignUp.logic';
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

export default class ServerAPI {
  public static async get(url: string) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}${url}`
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }

  public static async post<T>(url: string, body: T) {
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

  public static async verify(body: AuthHeaders) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}${Path.Verify}`,
        {
          ...body,
        }
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }

  public static async login(body: LoginFields) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}${Path.Login}`,
        {
          ...body,
        }
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }

  public static async signUp(body: SignUpFields) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}${Path.SignUp}`,
        {
          ...body,
        }
      );
      return response;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }
}
