import { Container } from "@mui/material";
import ReviewCard from "./ReviewCard";

export default function Review() {
  return (
    <Container className="review-container" component="main" maxWidth="lg">
      <ReviewCard />
    </Container>
  );
}
