import { Card, CardMedia, Container, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Path from "../../paths/paths";

const posterUrl = "https://image.tmdb.org/t/p/w500";
const apiUrl =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=589f3d4f48689702b074a222aea6db87";

export default function TopRatedPage() {
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
    <Container className="view-more-main" component="main" maxWidth="false">
      <Container maxWidth="false">
        <Typography component="h1" variant="h3" color="white">
          Top Rated Movies
        </Typography>
        <Container
          className="card-container"
          maxWidth="false"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            pt: 5,
          }}
        >
          {movies.map((movie) => (
            <Link to={`${Path.MovieDetails}/${movie.id}`} key={movie.id}>
              <Card
                className="card"
                key={movie.id}
                posterUrl={posterUrl}
                onMouseEnter={() => setHoveredMovie(movie.id)}
                onMouseLeave={() => setHoveredMovie()}
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="350"
                  alt={movie.title}
                  image={`${posterUrl}${movie.poster_path}`}
                />
                {hoveredMovie === movie.id && (
                  <Typography
                    className="movie-title"
                    variant="h6"
                    component="div"
                  >
                    {movie.title}
                  </Typography>
                )}
              </Card>
            </Link>
          ))}
          {movies.length === 0 && (
            <Typography className="no-movies" variant="h4" color="white">
              No Movies Yet
            </Typography>
          )}
        </Container>
      </Container>
    </Container>
  );
}
