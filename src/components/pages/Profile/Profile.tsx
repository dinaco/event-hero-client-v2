import { useState, useContext, useRef } from 'react';
import { AuthContext } from '../../../context/auth.context';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  Typography,
  Stack,
  TextField,
  Avatar,
  Button,
  Badge,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { blue } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingImg from '../../global/atoms/LoadingImg';
import useServerAPI from '../../../configurations/API/ServerAPI';
import SnackBar from '../../../utilities/SnackBar';

function Profile() {
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
      SnackBar({ message: 'Profile Updated!', type: 'success' });
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
      SnackBar({ message: 'Account deleted!' });
      logoutUser();
      navigate('/');
    });
  };

  const handleProfileImg = () => {
    inputFile.current.click();
  };

  return (
    <Paper elevation={20}>
      <Stack alignItems='center'>
        <Typography variant='h6' pt={3} gutterBottom>
          Edit Profile
        </Typography>
        <Badge
          overlap='circular'
          onClick={handleProfileImg}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <Avatar
              sx={{ bgcolor: blue[500], width: 22, height: 22 }}
              alt='edit icon'
            >
              <EditIcon sx={{ width: 16, height: 16 }} />
            </Avatar>
          }
        >
          <Avatar
            sx={{ width: 112, height: 112 }}
            alt={userSettings.name}
            src={userSettings.profileImg}
          />
        </Badge>
        <input
          type='file'
          accept='image/*'
          //   multiple={false}
          id='file'
          ref={inputFile}
          style={{ display: 'none' }}
        />
      </Stack>
      <Stack sx={{ p: 4 }} spacing={2}>
        <TextField
          fullWidth
          label='Full Name'
          value={userSettings.name}
          onChange={(e) =>
            setUserSettings({ ...userSettings, name: e.target.value })
          }
          placeholder='Enter your full name'
          required
        />
        <TextField
          fullWidth
          label='Email'
          value={userSettings.email}
          onChange={(e) =>
            setUserSettings({ ...userSettings, email: e.target.value })
          }
          placeholder='Enter your email'
          required
        />
        <TextField
          fullWidth
          label='Password'
          type='password'
          value={userSettings.password}
          onChange={(e) =>
            setUserSettings({ ...userSettings, password: e.target.value })
          }
          placeholder='Enter your password'
          required
        />
        <Stack pt={2} spacing={4}>
          <Button
            fullWidth
            onClick={handleSubmit}
            variant='contained'
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            fullWidth
            onClick={handleDelete}
            startIcon={<DeleteIcon />}
            variant='contained'
            color='error'
          >
            Delete
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default Profile;
