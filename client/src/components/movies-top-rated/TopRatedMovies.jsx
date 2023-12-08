import { Typography, Container, Button, Box } from "@mui/material/";
import { useEffect, useState } from "react";

import TopRatedCard from "./TopRatedCard";
import { Link } from "react-router-dom";
import Path from "../../paths/paths";

const posterUrl = "https://image.tmdb.org/t/p/w500";
const apiUrl =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=589f3d4f48689702b074a222aea6db87";

export default function TopRatedMovies() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    try {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.results.slice(0, 5));
        });
    } catch (error) {
      console.error("Error fetching movies from TMDB:", error);
    }
  }, []);

  return (
    <>
      <Typography className="top-rated-h2" variant="h2">
        Top Rated
      </Typography>
      <Container
        className="top-rated-container"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          py: 8,
        }}
      >
        {movies.map((movie) => (
          <TopRatedCard key={movie.id} {...movie} posterUrl={posterUrl} />
        ))}
        {movies.length === 0 && (
          <Typography className="no-movies" variant="h4" color="white">
            No Movies Yet
          </Typography>
        )}
      </Container>
      <Box className="view-more-btn">
        <Button component={Link} to={Path.TopRatedPage} sx={{ color: "white" }}>
          View More
        </Button>
      </Box>
    </>
  );
}
