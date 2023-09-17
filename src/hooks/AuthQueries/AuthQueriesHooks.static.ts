enum Path {
  Login = '/auth/login',
  SignUp = '/auth/signup',
  Verify = '/auth/verify',
}

enum Key {
  Login = 'login',
  SignUp = 'signup',
  Verify = 'auth',
}

export const REACT_QUERY_NEVER_REFETCH = {
  staleTime: Infinity,
  cacheTime: Infinity,
  retry: false,
};

export const authQueriesVars = {
  rootName: 'auth',
  login: { queryKey: Key.Login, endPoint: Path.Login },
  verify: { queryKey: Key.Verify, endPoint: Path.Verify },
};
