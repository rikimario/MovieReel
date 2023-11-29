import { Card, CardMedia, Container, Typography } from "@mui/material";

import { useEffect, useState } from "react";

const posterUrl = "https://image.tmdb.org/t/p/w500";
const apiUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=589f3d4f48689702b074a222aea6db87";

export default function PopularMoviesPage({ poster_path }) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    try {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.results);
        });
    } catch (error) {
      console.error("Error fetching movies from TMDB:", error);
    }
  }, []);
  return (
    <Container
      component="main"
      maxWidth="false"
      sx={{
        bgcolor: "rgba(17,17,17,0.8)",
        height: "100%",
        textAlign: "center",
        pt: 10,
      }}
    >
      <Container
        maxWidth="false"
        sx={{
          width: "100%",
          pt: 10,
        }}
      >
        <Typography component="h1" variant="h3" color="white">
          Popular Movies
        </Typography>
        <Container
          maxWidth="false"
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            py: 5,
            bgcolor: "none",
          }}
        >
          {movies.map((movie) => (
            <Card
              key={movie.id}
              posterUrl={posterUrl}
              sx={{ width: "fit-content", m: 1 }}
            >
              <CardMedia
                component="img"
                alt={movie.title}
                image={`${posterUrl}${movie.poster_path}`}
              />
            </Card>
          ))}
        </Container>
      </Container>
    </Container>
  );
}
