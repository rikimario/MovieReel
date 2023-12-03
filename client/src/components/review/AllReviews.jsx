import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Path from "../../paths/paths";

export default function AllReviews({ _id, title, review }) {
  return (
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
          to={`${Path.Review}/${_id}`}
          sx={{ ml: 2 }}
        >
          {title}
        </Button>
        <Typography variant="h6" sx={{ ml: 2 }}>
          {review}
        </Typography>
      </Box>
    </Card>
  );
}
