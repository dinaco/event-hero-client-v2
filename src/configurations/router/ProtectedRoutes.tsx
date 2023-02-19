import { Navigate, Outlet } from 'react-router-dom';
import type { UserRoles } from '../../context/auth.context';
import useAuthInfo from '../hooks/AuthInfo';

type AdminUsers = Extract<UserRoles, 'event-admin' | 'app-admin'>;

function ProtectedRoutes() {
  const { isLoggedIn } = useAuthInfo();
  //if the role required is there or not
  return isLoggedIn ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoutes;
