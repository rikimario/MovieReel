import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Path from "../../paths/paths";

export default function YourReviews({ _id, title, review }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
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
