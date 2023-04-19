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
import useProfile from './Profile.logic';

function Profile() {
  const {
    inputFile,
    isLoading,
    handleSubmit,
    handleDelete,
    handleProfileImg,
    userSettings,
    setUserSettings,
  } = useProfile();

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
            alt={userSettings.name}
            src={userSettings.profileImg}
          />
          <input
            hidden
            type='file'
            accept='image/*'
            multiple={false}
            ref={inputFile}
          />
        </Badge>
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
