import { Container } from "@mui/material";
import ReviewCard from "./ReviewCard";

export default function Review() {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        bgcolor: "whitesmoke",
        height: "100%",
        textAlign: "center",
        pt: 10,
      }}
    >
      <ReviewCard />
    </Container>
  );
}
