import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material/";
import style from "../Css/TopMovies.module.css";

export default function TopMovies() {
  return (
    <>
      <Typography className={style.topMovies} variant="h2" sx={{ mb: 4 }}>
        Upcomming Movies
      </Typography>

      <Card sx={{ maxWidth: 345, mt: 4 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="500"
          image="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ironman
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
