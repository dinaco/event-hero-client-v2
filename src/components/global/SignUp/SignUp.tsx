import { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Link,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {
  HandleChangeAuthForm,
  HandleChangeBetweenForms,
  HandleClickAuthForm,
} from "../TabbedAuthForm";

type Props = {
  handleChange: HandleChangeBetweenForms;
};

const Signup = ({ handleChange }: Props) => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    minWidth: 300,
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: HandleChangeAuthForm) => setEmail(e.target.value);
  const handleName = (e: HandleChangeAuthForm) => setName(e.target.value);
  const handlePassword = (e: HandleChangeAuthForm) =>
    setPassword(e.target.value);
  const handleSubmit = (e: HandleClickAuthForm) => {
    e.preventDefault();
    const body = { email, password, name };
    axios
      .post(`${process.env.VITE_BASE_API_URL}/auth/signup`, body)
      .then(() => {
        setEmail("");
        setName("");
        setPassword("");
        handleChange(e, 0);
      })
      .catch((err) => console.error(err.response.data.errorMessage));
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
        </Grid>
        <Stack spacing={1}>
          <TextField
            fullWidth
            label="Full Name"
            value={name}
            onChange={handleName}
            placeholder="Enter your full name"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter your password"
            required
          />
        </Stack>
        <Button
          type="submit"
          style={btnstyle}
          fullWidth
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          Sign up
        </Button>
        <Typography>
          Already a member?{" "}
          <Link onClick={(e) => handleChange(e, 0)}>Login</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
