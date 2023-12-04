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
    <Container sx={{ pt: 10 }}>
      <Typography component="h1" variant="h3">
        Your Reviews
      </Typography>
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
