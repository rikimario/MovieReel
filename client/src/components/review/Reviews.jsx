import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import * as reviewService from "../../services/reviewService";

import AllReviews from "./AllReviews";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewService
      .getAll()
      .then((result) => setReviews(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container
      className="main-container"
      component="main"
      maxWidth="lg"
      sx={{ p: 10 }}
    >
      <Container>
        <Typography className="all-reviews-title" variant="h2" sx={{ mb: 5 }}>
          All Reviews
        </Typography>
      </Container>
      <Container className="review-container">
        <Container sx={{ p: 5 }}>
          <Container
            className="all-reviews-container"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {reviews.map((review) => (
              <AllReviews key={review._id} {...review} />
            ))}

            {reviews.length === 0 && <h3>No Reviews Yet</h3>}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
