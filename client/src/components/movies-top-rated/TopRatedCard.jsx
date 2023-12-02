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
      </CardContent>

      <CardActions>
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
