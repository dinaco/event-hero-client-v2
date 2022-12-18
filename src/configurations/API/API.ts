import axios from "axios";
import { LoginFields } from "../../components/global/Login/Login";
import { SignUpFields } from "../../components/global/SignUp/SignUp";

enum Path {
  Login = "/auth/login",
  SignUp = "/auth/signup",
}

export default class API {
  public static async get(url: string) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}${url}`
      );
      console.log(response);
      return;
    } catch (error) {
      console.error(error);
    }
  }

  public static async post(url: string, body: any) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}${url}`,
        {
          ...body,
        }
      );
      console.log(response);
      return;
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error(error);
    }
  }
}
