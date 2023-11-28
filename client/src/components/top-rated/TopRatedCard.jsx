import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

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
        <Button variant="contained">Learn More</Button>
      </CardActions>
    </Card>
  );
}
