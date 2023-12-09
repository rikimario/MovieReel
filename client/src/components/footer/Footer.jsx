import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Container, Link } from "@mui/material";

function Copyright() {
  return (
    <Typography className="footer-text" variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/rikimario/MovieReel">
        MovieReel
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <CssBaseline />

      <Box
        className="footer"
        component="footer"
        // sx={{
        //   backgroundColor: (theme) =>
        //     theme.palette.mode === "light"
        //       ? theme.palette.grey[200]
        //       : theme.palette.grey[800],
        // }}
      >
        <Container position="static" maxWidth="md">
          <Copyright />
        </Container>
      </Box>
    </>
  );
}
