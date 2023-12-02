import { Card, CardMedia, Container, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Path from "../../paths/paths";

const posterUrl = "https://image.tmdb.org/t/p/w500";
const apiUrl =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=589f3d4f48689702b074a222aea6db87";

export default function ComingSoonPage() {
  const [movies, setMovie] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState();

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
          Upcoming Movies
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
            <Link to={`${Path.MovieDetails}/${movie.id}`} key={movie.id}>
              <Card
                key={movie.id}
                posterUrl={posterUrl}
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie()}
                sx={{
                  position: "relative",
                  width: "fit-content",
                  mx: 1,
                  my: 3,
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={movie.title}
                  image={`${posterUrl}${movie.poster_path}`}
                />
                {hoveredMovie === movie.id && (
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      textAlign: "center",
                      width: "100%",
                      color: "white",
                      text: "bold",
                      opacity: 1,
                      transition: "opacity 0.3s",
                    }}
                  >
                    {movie.title}
                  </Typography>
                )}
              </Card>
            </Link>
          ))}
        </Container>
      </Container>
    </Container>
  );
}
