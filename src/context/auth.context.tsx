import type { PropsWithChildren } from 'react';
import { useState, useEffect, createContext } from 'react';
import useServerAPI from '../configurations/API/ServerAPI';
import type { UserInfo } from '../utilities/GlobalTypes';

type AuthContextType = {
  isLoggedIn: boolean;
  isLoading: boolean;
  user?: UserInfo;
  storeToken: (token: string) => void;
  authenticateUser: () => void;
  logoutUser: () => void;
  loginUser: (token: string) => void;
  getToken: () => string | null;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProviderWrapper({ children }: PropsWithChildren<object>) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<AuthContextType['user']>(undefined);
  const { verifyAuthToken } = useServerAPI();

  const storeToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };

  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  const logoutUser = () => {
    removeToken();
    authenticateUser();
  };

  const loginUser = (token: string) => {
    storeToken(token);
    authenticateUser();
  };

  const getToken = () => {
    return localStorage.getItem('authToken');
  };

  const authenticateUser = () => {
    const storedToken = getToken();

    if (storedToken) {
      verifyAuthToken({
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
        .then((response) => {
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(response?.data);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(undefined);
          throw new Error(err);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(undefined);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logoutUser,
        loginUser,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
