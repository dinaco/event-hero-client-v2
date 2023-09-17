import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';
import type { UserRoles } from '../../utilities/GlobalTypes';
import SnackBar from '../../utilities/SnackBar';

/* const UserTypes: Record<UserRoles, JSX.Element> = {
  customer: <Outlet />,
  'event-admin': <Navigate to='/admin' />,
  'event-staff': <Outlet />,
  'app-admin': <Navigate to='/admin' />,
}; */

function handleFallback() {
  SnackBar({
    message: 'Permission Denied',
    type: 'error',
    toastId: 'protected-routes-error',
  });
  return <Navigate to='/' />;
}

const ProtectedRoutes = ({ requiredRoles }: Record<string, UserRoles[]>) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to='/login' />;

  return requiredRoles.includes(user.role) ? <Outlet /> : handleFallback();
};

export default ProtectedRoutes;
