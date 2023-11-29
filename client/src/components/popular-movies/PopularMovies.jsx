import { Typography, Container, Button } from "@mui/material/";
import { useEffect, useState } from "react";

import PopularMoviesCard from "./PopularMoviesCard";

const posterUrl = "https://image.tmdb.org/t/p/w500";
const apiUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=589f3d4f48689702b074a222aea6db87";

export default function PopularMovies() {
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
      <Typography
        color="white"
        variant="h2"
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        Popular Movies
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          py: 8,
        }}
      >
        {movies.map((movie) => (
          <PopularMoviesCard key={movie.id} {...movie} posterUrl={posterUrl} />
        ))}
      </Container>
      <Button sx={{ color: "white" }}>View More</Button>
    </>
  );
}
