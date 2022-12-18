import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from "./Login.style";
import { HandleChangeBetweenForms } from "../TabbedAuthForm.static";
import { useLogin } from "./Login.logic";

export type Props = {
  handleChange: HandleChangeBetweenForms;
};

const Login = ({ handleChange }: Props) => {
  const { classes } = useStyles();
  const { email, password, handleEmail, handlePassword, handleSubmit } =
    useLogin();

  return (
    <Grid>
      <Paper className={classes.container}>
        <Grid className={classes.header}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4">Sign In</Typography>
        </Grid>
        <Stack spacing={1}>
          <TextField
            label="Email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmail}
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={handlePassword}
            required
          />
        </Stack>
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>Do you have an account? </Typography>
        <Link onClick={(e) => handleChange(e, 1)}>Sign Up</Link>
      </Paper>
    </Grid>
  );
};

export default Login;
