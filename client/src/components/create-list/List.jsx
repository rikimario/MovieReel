import { Container } from "@mui/material";
import ListCard from "./ListCard";

export default function List() {
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
      <ListCard />
    </Container>
  );
}
