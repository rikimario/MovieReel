import {
  Button,
  AppBar,
  Typography,
  Toolbar,
  CssBaseline,
  Stack,
  Menu,
  MenuItem,
  Box,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import AuthContext from "../context/authContext";
import Path from "../paths/paths";

const settings = [
  { label: "My Account", path: "/my-account" },
  { label: "Create Review", path: "/create-review" },
  { label: "Logout", path: "/logout" },
];

export default function NavBar() {
  const { isAuth, username } = useContext(AuthContext);

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
              to={Path.Home}
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1 }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to={Path.Reviews}
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1 }}
            >
              Reviews
            </Button>
            {!isAuth && (
              <>
                <Button
                  component={Link}
                  to={Path.Login}
                  variant="outlined"
                  sx={{ my: 1, mx: 2.5 }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to={Path.Register}
                  variant="contained"
                  sx={{ my: 1, mx: 2.5 }}
                >
                  Register
                </Button>
              </>
            )}
          </Stack>

          {isAuth && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <Button
                  onClick={handleOpenUserMenu}
                  component={Link}
                  to="#"
                  variant="contained"
                  color="success"
                  sx={{ p: 2 }}
                >
                  {username}
                </Button>
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
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    component={Link}
                    to={setting.path}
                  >
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
