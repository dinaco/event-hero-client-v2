import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Stack,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from './Login.style';
import { useLogin } from './Login.logic';

const Login = () => {
  const { classes } = useStyles();
  const { loginInfo, setLoginInfo, handleSubmit } = useLogin();

  return (
    <Grid>
      <Paper className={classes.container}>
        <Grid className={classes.header}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h4'>Sign In</Typography>
        </Grid>
        <Stack spacing={1}>
          <TextField
            label='Email'
            placeholder='Enter email'
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
            required
          />
          <TextField
            label='Password'
            placeholder='Enter password'
            type='password'
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            required
          />
        </Stack>
        <Button
          className={classes.button}
          type='submit'
          variant='contained'
          onClick={handleSubmit}
          fullWidth
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
