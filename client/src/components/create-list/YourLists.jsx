import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Path from "../../paths/paths";

export default function YourLists() {
  return (
    <Container sx={{ pt: 6, border: "1px solid grey" }}>
      <Container
        maxWidth="false"
        sx={{
          maxWidth: "70%",
          ml: 0,
          display: "flex",
          flexDirection: "row",
          py: 5,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <CardMedia
              sx={{ width: "25%", height: "100%" }}
              component="img"
              alt="green iguana"
              image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            />
            <Box sx={{ textAlign: "left" }}>
              <Button
                variant="text"
                size="large"
                component={Link}
                to={Path.List}
                sx={{ ml: 2 }}
              >
                list title
              </Button>
              <Typography variant="h6" sx={{ ml: 2 }}>
                this is a paragraph asdasd sa asd sad sad ad asdasdasdasdad
              </Typography>
            </Box>
          </Card>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              bgcolor: "rgba(17,17,17,0.8)",
              width: "100%",
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
    </Container>
  );
}
