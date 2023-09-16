enum Path {
  Login = '/auth/login',
  SignUp = '/auth/signup',
  Verify = '/auth/verify',
}

enum Key {
  Login = 'login',
  SignUp = 'signup',
  Verify = 'verify',
}

export const authQueriesVars = {
  rootName: 'auth',
  login: { queryKey: Key.Login, endPoint: Path.Login },
};
