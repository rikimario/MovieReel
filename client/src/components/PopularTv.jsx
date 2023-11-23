import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@mui/material/";

export default function PopularTv() {
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
        Popular TV
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          pb: 20,
        }}
      >
        <Card sx={{ minWidth: 300, mt: 2, mr: 2 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="500"
            width="fit-content"
            image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ironman
            </Typography>
          </CardContent>

          <CardActions>
            <Button variant="contained">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 300, mt: 2, mr: 2 }}>
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
          </CardContent>

          <CardActions>
            <Button variant="contained">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 300, mt: 2, mr: 2 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="500"
            image="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ironman
            </Typography>
          </CardContent>

          <CardActions>
            <Button variant="contained">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 300, mt: 2, mr: 2 }}>
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
          </CardContent>

          <CardActions>
            <Button variant="contained">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 300, mt: 2, mr: 2 }}>
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
          </CardContent>

          <CardActions>
            <Button variant="contained">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
