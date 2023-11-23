import {
  Button,
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  CssBaseline,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <CssBaseline />
      <AppBar
        className="nav-bar"
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h3"
            component="div"
            color="chocolate"
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            MovieReel
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to="/"
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1 }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="about"
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1 }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/create"
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1 }}
            >
              Create
            </Button>

            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
            >
              Sign In
            </Button>
            <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
              Sign Up
            </Button>
            <Avatar
              alt="Elon Musk"
              src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982181284/elon-musk-9781982181284_hr.jpg"
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
