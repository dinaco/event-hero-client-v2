import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../../context/auth.context';
import useServerAPI from '../../../configurations/API/ServerAPI';
import { useNavigate } from 'react-router-dom';
import SnackBar from '../../../utilities/SnackBar';

const useProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [userSettings, setUserSettings] = useState({
    name: user?.name,
    email: user?.email,
    profileImg: user?.profileImg,
    password: '',
  });

  const { isLoading, deleteRequest, putRequest } = useServerAPI();

  const navigate = useNavigate();

  const inputFile = useRef();

  const { logoutUser } = useContext(AuthContext);

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    putRequest('/api/profile', userSettings).then(() => {
      SnackBar({
        message: 'Profile Updated!',
        type: 'success',
        toastId: 'account-updated',
      });
      setUserSettings({ ...userSettings, password: '' });
      setUser({
        ...user,
        name: userSettings.name,
        email: userSettings.email,
        profileImg: userSettings.profileImg,
      });
    });
  };
  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    deleteRequest('/api/profile').then(() => {
      SnackBar({ message: 'Account deleted!', toastId: 'account-deleted' });
      logoutUser();
      navigate('/');
    });
  };

  const handleProfileImg = () => {
    inputFile.current?.click();
  };

  return {
    inputFile,
    isLoading,
    handleSubmit,
    handleDelete,
    handleProfileImg,
    userSettings,
    setUserSettings,
  };
};

export default useProfile;
