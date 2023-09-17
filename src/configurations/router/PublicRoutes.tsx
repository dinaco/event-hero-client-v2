import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function ProtectedRoutes() {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to='/my-account' /> : <Outlet />;
}

export default ProtectedRoutes;
