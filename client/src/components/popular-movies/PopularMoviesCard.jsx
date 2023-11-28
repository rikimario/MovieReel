import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function PopularMoviesCard({
  id,
  title,
  posterUrl,
  poster_path,
}) {
  const poster = `${posterUrl}${poster_path}`;

  return (
    <Card sx={{ minWidth: 300, mt: 2, mr: 2 }}>
      <CardMedia
        component="img"
        alt={title}
        height="500"
        width="fit-content"
        image={poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* <h3>{movies.Title}</h3> */}
      </CardContent>

      <CardActions>
        <Button variant="contained" component={Link} to="/movie-card">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
