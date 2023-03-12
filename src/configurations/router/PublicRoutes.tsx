import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function ProtectedRoutes() {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Navigate to='/my-account' /> : <Outlet />;
}

export default ProtectedRoutes;
