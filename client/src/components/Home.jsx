import { CssBaseline, Box, Container, Typography } from "@mui/material";
import PopularMovies from "./movies-popular/PopularMovies";
import ComingSoon from "./movies-coming-soon/ComingSoon";
import TopRatedMovies from "./movies-top-rated/TopRatedMovies";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="false">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            ml: 20,
            mt: 20,
            mr: 140,
            pb: 20,
          }}
        >
          <Typography variant="h1" color="white" sx={{ fontSize: 100 }}>
            Your Personal Movie Diary
          </Typography>
        </Box>
      </Container>

      <PopularMovies />
      <TopRatedMovies />
      <ComingSoon />
    </>
  );
}
