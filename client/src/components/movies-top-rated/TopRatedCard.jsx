import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Path from "../../paths/paths";
import { Link } from "react-router-dom";

export default function TopRatedCard({ id, title, posterUrl, poster_path }) {
  const poster = `${posterUrl}${poster_path}`;

  return (
    <Card className="card-poster">
      <CardMedia component="img" alt={title} image={poster} />
      <CardContent>
        <Typography className="card-title" variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>

      <CardActions className="learn-more">
        <Button
          variant="contained"
          component={Link}
          to={`${Path.MovieDetails}/${id}`}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
