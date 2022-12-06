import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import axios from "axios";
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
import {
  HandleChangeAuthForm,
  HandleChangeBetweenForms,
  HandleClickAuthForm,
} from "../TabbedAuthForm";

type Props = {
  handleChange: HandleChangeBetweenForms;
};

const Login = ({ handleChange }: Props) => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    minWidth: 300,
    // margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e: HandleChangeAuthForm) => setEmail(e.target.value);
  const handlePassword = (e: HandleChangeAuthForm) =>
    setPassword(e.target.value);
  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();
    const body = { email, password };
    axios
      .post(`${process.env.VITE_BASE_API_URL}/auth/login`, body)
      .then((response) => {
        setEmail("");
        setPassword("");
        storeToken(response.data.authToken);
        authenticateUser();
      })
      .catch((err) => console.error(err.response.data.errorMessage));
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" gutterBottom align={"center"}>
            Sign In
          </Typography>
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
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
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
