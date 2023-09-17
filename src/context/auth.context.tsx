import type { PropsWithChildren } from 'react';
import { useEffect, createContext, useCallback } from 'react';
import type { UserInfo } from '../utilities/GlobalTypes';
import { useAuthenticateUser } from '../hooks/AuthQueries/AuthQueriesHooks';
import { useQueryClient } from '@tanstack/react-query';
import { authQueriesVars } from '../hooks/AuthQueries/AuthQueriesHooks.static';

type AuthContextType = {
  user?: UserInfo;
  storeToken: (token: string) => void;
  authenticateUser: () => void;
  logoutUser: () => void;
  loginUser: (token: string) => void;
  getToken: () => string | null;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProviderWrapper({ children }: PropsWithChildren<object>) {
  const { verifyUserQuery } = useAuthenticateUser();
  const queryClient = useQueryClient();

  const storeToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };

  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  const logoutUser = () => {
    removeToken();
    queryClient.removeQueries([authQueriesVars.verify.queryKey]);
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
      queryClient.removeQueries([authQueriesVars.verify.queryKey]);
      return;
    }

    verifyUserQuery();
  }, [queryClient, verifyUserQuery]);

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);

  return (
    <AuthContext.Provider
      value={{
        user: queryClient.getQueryData([authQueriesVars.verify.queryKey]),
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
