import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/auth.context';

export type HandleClick = React.MouseEvent<HTMLElement>;

const useNavbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement>();
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement>();

  const navigate = useNavigate();

  const customLogoutUser = () => {
    logoutUser();
    navigate('/');
  };

  const handleOpenNavMenu = (event: HandleClick) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: HandleClick) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(undefined);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(undefined);
  };
  return {
    customLogoutUser,
    user,
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
  };
};

export default useNavbar;
