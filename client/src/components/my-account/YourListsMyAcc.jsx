import { Container, Typography } from "@mui/material";
import YourLists from "../create-list/YourLists";

export default function YourListsMyAcc() {
  return (
    <Container sx={{ pt: 10 }}>
      <Typography component="h1" variant="h3">
        Your Lists
      </Typography>
      <YourLists />
    </Container>
  );
}
