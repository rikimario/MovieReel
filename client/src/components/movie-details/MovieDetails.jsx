import {
  Card,
  Container,
  Typography,
  CardMedia,
  CardContent,
  List,
  ListItemText,
  Box,
  Rating,
} from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/authContext";

const apiKey = "589f3d4f48689702b074a222aea6db87";
const apiUrl = "https://api.themoviedb.org/3/movie";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { isAuth } = useContext(AuthContext);
  const { id: movieId } = useParams();

  const posterUrl = "https://image.tmdb.org/t/p/w500";
  const poster_path = movie.poster_path;
  const poster = `${posterUrl}${poster_path}`;

  useEffect(() => {
    fetch(`${apiUrl}/${movieId}?api_key=${apiKey}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not Found!");
        }
        return res.json();
      })
      .then(setMovie);
  }, [movieId]);

  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        maxHeight: 600,
        my: 20,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "rgba(17,17,17,0.8)",
          width: "90%",
        }}
      >
        <CardMedia
          sx={{ width: "25%", height: "100%" }}
          component="img"
          alt={movie.title}
          image={poster}
        />
        <CardContent sx={{ width: "100%" }}>
          <Typography
            sx={{ width: 750 }}
            gutterBottom
            variant="h5"
            component="div"
            color="white"
          >
            <Container
              maxWidth="false"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 1100,
              }}
            >
              <Box>
                <List sx={{ width: "100%" }}>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary={`Name: ${movie.title}`}
                    sx={{ pb: 4 }}
                  />
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary={`Budget: ${movie.budget}$`}
                    sx={{ pb: 4 }}
                  />
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary={`Release: ${movie.release_date}`}
                    sx={{ pb: 4 }}
                  />
                </List>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <List>
                  {movie.genres && movie.genres.length > 0 && (
                    <ListItemText
                      primaryTypographyProps={{ fontSize: 25 }}
                      primary={`Genres: ${movie.genres
                        .map((genre) => genre.name)
                        .join(", ")}`}
                      sx={{ pb: 4 }}
                    />
                  )}
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary={`Runtime: ${movie.runtime}m`}
                    sx={{ pb: 4 }}
                  />
                </List>
              </Box>
            </Container>
          </Typography>

          <ListItemText
            primaryTypographyProps={{ fontSize: 25, p: 2, color: "white" }}
            secondaryTypographyProps={{ fontSize: 20, color: "white" }}
            primary={`${movie.title} Synopsis`}
            secondary={`${movie.overview}`}
          />
          {isAuth && (
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Container sx={{ mt: 5 }}>
                <Typography variant="h5" color="white">
                  Your Ratings
                </Typography>
                <Rating
                  name="customized-10"
                  size="large"
                  defaultValue={1}
                  max={10}
                  sx={{
                    bgcolor: "white",
                    p: 1,
                    m: 1,
                    borderRadius: "10px",
                  }}
                />
              </Container>
            </Container>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
