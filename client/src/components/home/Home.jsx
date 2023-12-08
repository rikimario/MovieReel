import { Box, Container, Typography } from "@mui/material";
import PopularMovies from "../movies-popular/PopularMovies";
import ComingSoon from "../movies-coming-soon/ComingSoon";
import TopRatedMovies from "../movies-top-rated/TopRatedMovies";

export default function Home() {
  return (
    <>
      <Container className="main-container" maxWidth="false">
        <Box className="main-box">
          <Typography variant="h1" color="white" sx={{ fontSize: 70 }}>
            Your Personal Movie Diary
          </Typography>
          <Typography className="p" sx={{ fontSize: 20, lineHeight: 2.5 }}>
            MovieReel is your beautiful collection of popular, top rated and
            upcoming movies. Discover latest movies and reviews. Show your LOVE
            of movies.
          </Typography>
        </Box>
      </Container>

      <PopularMovies />
      <TopRatedMovies />
      <ComingSoon />
    </>
  );
}
