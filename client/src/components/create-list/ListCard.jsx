import { Card, CardMedia, Container, Typography } from "@mui/material";

export default function ListCard() {
  return (
    <Container sx={{ pt: 10 }}>
      <Typography component="h1" variant="h3">
        List title
      </Typography>
      <Container sx={{ display: "flex", flexDirection: "row", py: 5 }}>
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
            alt="green iguana"
            image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
          />
        </Card>
      </Container>
    </Container>
  );
}
