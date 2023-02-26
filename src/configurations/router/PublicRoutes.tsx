import { Navigate, Outlet } from 'react-router-dom';
import LoadingImg from '../../components/global/atoms/LoadingImg';
import useAuthInfo from '../hooks/AuthInfo';

function ProtectedRoutes() {
  const { isLoggedIn, isLoading } = useAuthInfo();
  if (isLoading) return <LoadingImg />;
  return isLoggedIn ? <Navigate to='/my-account' /> : <Outlet />;
}

export default ProtectedRoutes;
