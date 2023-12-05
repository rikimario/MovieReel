import { Box, Button, Card, Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import AuthContext from "../../context/authContext";
import * as reviewService from "../../services/reviewService";
import Path from "../../paths/paths";
import { pathToUrl } from "../../utils/pathUtil";

export default function ListCard() {
  const [review, setReview] = useState([]);
  const { id: reviewId } = useParams();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    reviewService.getAll().then((result) => {
      const selectedReview = result.find((review) => review._id === reviewId);

      if (selectedReview) {
        setReview(selectedReview);
      }
    });
  }, [reviewId]);

  return (
    <Container sx={{ pt: 10 }}>
      <Typography component="h1" variant="h3">
        {review.title}
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          py: 5,
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "rgba(17,17,17,0.8)",
            width: "100%",
            minHeight: "250px",
            p: 1.5,
          }}
        >
          <Box sx={{ color: "white" }}>
            <Typography variant="h5">{review.review}</Typography>
          </Box>
        </Card>
      </Container>

      {userId === review._ownerId && (
        <Box sx={{ display: "flex", gap: 2, ml: 3 }}>
          <Button
            component={Link}
            to={pathToUrl(Path.Edit, { reviewId })}
            variant="contained"
          >
            Edit
          </Button>
          <Button variant="contained">Delete</Button>
        </Box>
      )}
    </Container>
  );
}
