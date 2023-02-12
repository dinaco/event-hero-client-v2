import axios from 'axios';
import type { LoginFields } from '../../components/global/Login/Login.logic';
import type { SignUpFields } from '../../components/global/SignUp/SignUp.logic';
import SnackBar from '../../utilities/SnackBar';

enum Path {
  Login = '/auth/login',
  SignUp = '/auth/signup',
}

export default class API {
  public static async get(url: string) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}${url}`
      );
      console.log(response);
      return;
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
      console.log(response);
      return;
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
      console.log(response);
      return;
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
      console.log(response);
      return;
    } catch (error: any) {
      SnackBar({ message: error.response.data.errorMessage, type: 'error' });
    }
  }
}
