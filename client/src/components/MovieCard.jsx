import {
  Card,
  Container,
  Typography,
  CardMedia,
  CardContent,
  List,
  ListItemText,
  Box,
} from "@mui/material";

export default function MovieCard() {
  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        maxHeight: 550,
        my: 20,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          bgcolor: "rgba(17,17,17,0.8)",
          width: "100%",
        }}
      >
        <CardMedia
          sx={{ width: "25%" }}
          component="img"
          alt="green iguana"
          height="550"
          image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        />
        <CardContent sx={{ width: "100%" }}>
          <Typography
            sx={{ width: 750 }}
            gutterBottom
            variant="h5"
            component="div"
            color="white"
          >
            <Container
              maxWidth="false"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 1100,
              }}
            >
              <Box>
                <List sx={{ width: "100%" }}>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary="Director: Christopher Nolan"
                    sx={{ pb: 4 }}
                  />
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary="Writers: Jonathan NolanChristopher NolanDavid S. Goyer"
                    sx={{ pb: 4 }}
                  />
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary="Release: June 21, 2006"
                    sx={{ pb: 4 }}
                  />
                </List>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <List>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary="Genres: Science Fiction, Action, Thriller"
                    sx={{ pb: 4 }}
                  />
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary="Runtime: 1h 24m"
                    sx={{ pb: 4 }}
                  />
                </List>
              </Box>
            </Container>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
