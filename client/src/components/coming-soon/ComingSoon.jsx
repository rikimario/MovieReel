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
import ComingSoonCard from "./ComingSoonCard";

import * as movieService from "../../services/movieService";

const posterUrl = "https://image.tmdb.org/t/p/w500";

export default function ComingSoon() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movieService.getComingSoon();
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
        Coming Soon
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
          <ComingSoonCard key={movie.id} {...movie} posterUrl={posterUrl} />
        ))}
      </Container>
    </>
  );
}
