import { Navigate, Outlet } from 'react-router-dom';
import useAuthInfo from '../hooks/AuthInfo';

function ProtectedRoutes() {
  const { isLoggedIn } = useAuthInfo();
  return isLoggedIn ? <Navigate to='/my-account' /> : <Outlet />;
}

export default ProtectedRoutes;
