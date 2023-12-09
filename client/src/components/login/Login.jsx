import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit, isSubmitted, error } = useForm(
    loginSubmitHandler,
    {
      email: "",
      password: "",
    }
  );

  const areFieldsEmpty =
    isSubmitted && (values.email === "" || values.password === "");

  return (
    <Container className="login-container-main" component="main" maxWidth="sm">
      <CssBaseline />
      <Box className="login-box">
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome back!
        </Typography>
        <Box component="form" onSubmit={onSubmit} sx={{ mt: 6.3 }}>
          {areFieldsEmpty && <Typography color="error">{error}</Typography>}
          <TextField
            type="email"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChange}
            value={values.email}
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChange}
            value={values.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
