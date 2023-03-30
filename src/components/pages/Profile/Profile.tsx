import { useState, useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../../../context/auth.context';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  Typography,
  Stack,
  TextField,
  Grid,
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
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profileImg, setProfileImg] = useState();
  const [password, setPassword] = useState();

  const { isLoading, deleteRequest, fetchRequest, putRequest } = useServerAPI();

  const navigate = useNavigate();

  const inputFile = useRef();

  const { logoutUser } = useContext(AuthContext);

  useEffect(() => {
    fetchRequest('/api/profile').then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setProfileImg(response.data.profileImg);
    });
  }, []);

  const handleSubmit = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const body = { email, password, name };
    putRequest('/api/profile', body).then(() =>
      SnackBar({ message: 'Profile Updated!', type: 'success' })
    );
  };
  const handleDelete = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

  if (isLoading) {
    return <LoadingImg />;
  }

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
            alt={name}
            src={profileImg}
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your full name'
          required
        />
        <TextField
          fullWidth
          label='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          required
        />
        <TextField
          fullWidth
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
          required
        />
        <Stack pt={2} spacing={4}>
          <Button
            type='submit'
            fullWidth
            onClick={handleSubmit}
            variant='contained'
            startIcon={<EditIcon />}
            color='primary'
          >
            Edit
          </Button>
          <Button
            type='submit'
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
