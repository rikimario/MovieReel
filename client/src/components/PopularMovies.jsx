import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@mui/material/";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const tmdb =
  "https://api.themoviedb.org/3/movie/popular?api_key=589f3d4f48689702b074a222aea6db87";
const poster = "https://image.tmdb.org/t/p/w500";

export default function PopularMovies() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    try {
      fetch(tmdb)
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
          pb: 20,
        }}
      >
        {movies.map((movie) => (
          <Card sx={{ minWidth: 300, mt: 2, mr: 2 }}>
            <CardMedia
              component="img"
              alt={movie.title}
              height="500"
              width="fit-content"
              image={`${poster}${movie.poster_path}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              {/* <h3>{movies.Title}</h3> */}
            </CardContent>

            <CardActions>
              <Button variant="contained" component={Link} to="/movie-card">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
}
