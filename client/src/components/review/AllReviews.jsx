import { Box, Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Path from "../../paths/paths";

export default function AllReviews({ _id, title, review }) {
  return (
    <Card>
      <Box className="review-box">
        <Button
          variant="text"
          size="large"
          component={Link}
          to={`${Path.Review}/${_id}`}
          sx={{ pl: 3 }}
        >
          {title}
        </Button>
        <Typography className="review-content" variant="h6">
          {review}
        </Typography>
      </Box>
    </Card>
  );
}
