import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

function useAuthInfo() {
  const { isLoggedIn, user, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  return {
    isLoggedIn,
    user,
    isLoading,
    navigate,
  };
}

export default useAuthInfo;
