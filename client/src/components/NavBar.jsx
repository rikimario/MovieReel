import {
  Button,
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  CssBaseline,
  Stack,
  Menu,
  MenuItem,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const settings = [
  "Profile",
  "Watch List",
  "Create List",
  "Your Ratings",
  "Logout",
];

export default function NavBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        className="nav-bar"
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
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
            {/* <Button
              component={Link}
              to="/create"
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1 }}
            >
              Create
            </Button> */}

            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{ my: 1, mx: 2.5 }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{ my: 1, mx: 2.5 }}
            >
              Register
            </Button>
            {/* <Avatar
              alt="Elon Musk"
              src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982181284/elon-musk-9781982181284_hr.jpg"
            /> */}
          </Stack>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar
                  alt="Elon Musk"
                  src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982181284/elon-musk-9781982181284_hr.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
