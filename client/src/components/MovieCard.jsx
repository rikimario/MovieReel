import {
  Card,
  Container,
  Typography,
  CardMedia,
  CardContent,
  List,
  ListItemText,
} from "@mui/material";

export default function MovieCard() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        height: "100vh",
        maxHeight: 550,
        my: 20,
        // bgcolor: "rgba(17,17,17,0.8)",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          minWidth: 300,
          bgcolor: "rgba(17,17,17,0.8)",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="469"
          width="fit-content"
          image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        />
        <CardContent>
          <Typography
            sx={{ width: 750 }}
            gutterBottom
            variant="h5"
            component="div"
            color="white"
          >
            <List>
              <ListItemText>text 1</ListItemText>
              <ListItemText>text 2</ListItemText>
              <ListItemText>text 3</ListItemText>
              <ListItemText>text 4</ListItemText>
            </List>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
