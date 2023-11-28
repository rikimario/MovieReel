import { Typography, Container } from "@mui/material/";
import { useEffect, useState } from "react";

import * as movieService from "../../services/movieService";

import PopularMoviesCard from "./PopularMoviesCard";

const posterUrl = "https://image.tmdb.org/t/p/w500";

export default function PopularMovies() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movieService.getPopular();
        console.log(data);
        setMovie(data.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching movies from TMDB:", error);
      }
    };

    fetchData();
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
          pb: 20,
        }}
      >
        {movies.map((movie) => (
          <PopularMoviesCard key={movie.id} {...movie} posterUrl={posterUrl} />
        ))}
      </Container>
    </>
  );
}
