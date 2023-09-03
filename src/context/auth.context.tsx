import type { PropsWithChildren } from 'react';
import { useState, useEffect, createContext, useCallback } from 'react';
import useServerAPI from '../configurations/API/ServerAPI';
import type { UserInfo } from '../utilities/GlobalTypes';

type AuthContextType = {
  isLoggedIn: boolean;
  user?: UserInfo;
  setUser: (user: UserInfo) => void;
  storeToken: (token: string) => void;
  authenticateUser: () => void;
  logoutUser: () => void;
  loginUser: (token: string) => void;
  getToken: () => string | null;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProviderWrapper({ children }: PropsWithChildren<object>) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthContextType['user']>();
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

  const authenticateUser = useCallback(() => {
    const storedToken = getToken();
    if (!storedToken) {
      setIsLoggedIn(false);
      setUser(undefined);
      return;
    }

    verifyAuthToken({
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then((response) => {
        setIsLoggedIn(true);
        setUser(response);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setUser(undefined);
      });
  }, [verifyAuthToken]);

  useEffect(() => {
    authenticateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        setUser,
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
