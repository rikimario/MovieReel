import {
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import YourLists from "../create-list/YourLists";
import YourListsMyAcc from "./YourListsMyAcc";

export default function MyAccount() {
  return (
    <>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          bgcolor: "whitesmoke",
          height: "100%",
          textAlign: "center",
          pt: 10,
        }}
      >
        <Typography component="h1" variant="h3">
          My Account
        </Typography>
        <Container
          sx={{
            textAlign: "left",
            p: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img src="https://miro.medium.com/max/900/1*hy3_Usq8bFoxp4fng-Lt4w.jpeg" />
          <Container sx={{ bgcolor: "white", ml: 1 }}>
            <Typography component="h1" variant="h4" sx={{ p: 2 }}>
              Username: rikimario
            </Typography>
            <Typography component="h1" variant="h4" sx={{ p: 2 }}>
              First name: Mario
            </Typography>
            <Typography component="h1" variant="h4" sx={{ p: 2 }}>
              Last name: Valentinov
            </Typography>
            <Typography component="h1" variant="h4" sx={{ p: 2 }}>
              Email: mario@abv.bg
            </Typography>
            <Container sx={{ pt: 6 }}>
              <Button variant="contained" size="large">
                Edit
              </Button>
            </Container>
          </Container>
        </Container>
        <Divider variant="middle" sx={{ height: 20 }} />

        <YourListsMyAcc />
        <Divider variant="middle" sx={{ height: 20 }} />

        <Container sx={{ pt: 10 }}>
          <Typography component="h1" variant="h3">
            My Ratings
          </Typography>
          <Container sx={{ display: "flex", flexDirection: "row", py: 5 }}>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
          </Container>
        </Container>
        <Divider variant="middle" sx={{ height: 20 }} />

        <Container sx={{ pt: 10 }}>
          <Typography component="h1" variant="h3">
            My Lists
          </Typography>
          <Container sx={{ display: "flex", flexDirection: "row", py: 5 }}>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
            <Card sx={{ maxWidth: 300, p: 1 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
              />
            </Card>
          </Container>
        </Container>
      </Container>
    </>
  );
}
