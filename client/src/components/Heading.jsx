import { CssBaseline, Box, Container, Typography } from "@mui/material";
import PopularMovies from "./popular-movies/PopularMovies";
import ComingSoon from "./coming-soon/ComingSoon";
import TopRatedMovies from "./top-rated/TopRatedMovies";

export default function Heading() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="false">
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "row",
            ml: 20,
            mt: 20,
            mr: 140,
            pb: 20,
          }}
        >
          <Typography variant="h1" color="white" sx={{ fontSize: 100 }}>
            Find Movies and TV
          </Typography>
          {/* <img src="./public/pngegg.png" alt="" /> */}
        </Box>
      </Container>

      <PopularMovies />
      <TopRatedMovies />
      <ComingSoon />
    </>
  );
}
