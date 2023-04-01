import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import useStyles from './SignUp.style';
import { useSignUp } from './SignUp.logic';

const Signup = () => {
  const { classes } = useStyles();
  const { registrationInfo, setRegistrationInfo, handleSubmit } = useSignUp();

  return (
    <Grid>
      <Paper className={classes.container}>
        <Grid className={classes.header}>
          <Avatar className={classes.avatar}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <Typography variant='h4'>Sign Up</Typography>
        </Grid>
        <Stack spacing={1}>
          <TextField
            fullWidth
            label='Full Name'
            value={registrationInfo.name}
            onChange={(e) =>
              setRegistrationInfo({ ...registrationInfo, name: e.target.value })
            }
            placeholder='Enter your full name'
            required
          />
          <TextField
            fullWidth
            label='Email'
            value={registrationInfo.email}
            onChange={(e) =>
              setRegistrationInfo({
                ...registrationInfo,
                email: e.target.value,
              })
            }
            placeholder='Enter your email'
            required
          />
          <TextField
            fullWidth
            label='Password'
            type='password'
            value={registrationInfo.password}
            onChange={(e) =>
              setRegistrationInfo({
                ...registrationInfo,
                password: e.target.value,
              })
            }
            placeholder='Enter your password'
            required
          />
        </Stack>
        <Button
          className={classes.button}
          type='submit'
          fullWidth
          onClick={handleSubmit}
          variant='contained'
        >
          Sign up
        </Button>
      </Paper>
    </Grid>
  );
};

export default Signup;
