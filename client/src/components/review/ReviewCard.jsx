import { Box, Button, Card, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as reviewService from "../../services/reviewService";

export default function ListCard() {
  const [review, setReview] = useState([]);
  const { id: reviewId } = useParams();

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
      <Box sx={{ display: "flex", gap: 2, ml: 3 }}>
        <Button variant="contained">Edit</Button>
        <Button variant="contained">Delete</Button>
      </Box>
    </Container>
  );
}
