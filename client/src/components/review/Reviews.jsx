import { Container } from "@mui/material";
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
      component="main"
      maxWidth="xl"
      sx={{
        bgcolor: "whitesmoke",
        height: "100%",
        textAlign: "center",
        pt: 10,
      }}
    >
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
              <AllReviews key={review._id} {...review} />
            ))}

            {reviews.length === 0 && <h3>No Reviews Yet</h3>}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
