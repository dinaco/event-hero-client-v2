import type { PropsWithChildren } from 'react';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

type AuthContextType = {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: string | null;
  storeToken: (token: string) => void;
  authenticateUser: () => void;
  logoutUser: () => void;
  getToken: () => string | null;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

function AuthProviderWrapper(props: PropsWithChildren<object>) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

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

  const getToken = () => {
    return localStorage.getItem('authToken');
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      axios
        .get(`${import.meta.env.REACT_APP_BASE_API_URL}/auth/verify`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(response.data);
        })
        .catch((err) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          throw new Error(err);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
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
        getToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
