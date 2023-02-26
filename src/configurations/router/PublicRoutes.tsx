import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import LoadingImg from '../../components/global/atoms/LoadingImg';
import { AuthContext } from '../../context/auth.context';

function ProtectedRoutes() {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  if (isLoading) return <LoadingImg />;
  return isLoggedIn ? <Navigate to='/my-account' /> : <Outlet />;
}

export default ProtectedRoutes;
