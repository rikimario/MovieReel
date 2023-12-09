import { Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";

import * as reviewService from "../../services/reviewService";

import YourReviews from "../review/YourReviews";

export default function YourReviewsMyAcc() {
  const [reviews, setReviews] = useState([]);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    reviewService
      .getAll()
      .then((result) => {
        const userReviews = result.filter(
          (review) => review._ownerId === userId
        );
        setReviews(userReviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  return (
    <Container className="my-acc-reviews">
      <Typography className="reviews-title" component="h1" variant="h3">
        Your Reviews
      </Typography>
      <Container className="your-reviews-box">
        <Container className="your-reviews-container" maxWidth="false">
          <Container
            className="your-reviews-cards"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {reviews.map((review) => (
              <YourReviews key={review._id} {...review} />
            ))}
            {reviews.length === 0 && <h3>No Reviews Yet</h3>}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
