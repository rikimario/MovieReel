import { Card, CardMedia, Container, Divider, Typography } from "@mui/material";
import YourReviewsMyAcc from "./YourReviewMyAcc";

export default function MyAccount() {
  return (
    <>
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
        <Typography component="h1" variant="h3">
          My Account
        </Typography>
        <Container
          sx={{
            textAlign: "left",
            p: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Container sx={{ bgcolor: "white", ml: 1 }}>
            <Typography component="h1" variant="h4" sx={{ p: 2 }}>
              First name: Mario
            </Typography>
            <Typography component="h1" variant="h4" sx={{ p: 2 }}>
              Last name: Valentinov
            </Typography>
            <Typography component="h1" variant="h4" sx={{ p: 2 }}>
              Email: mario@abv.bg
            </Typography>
          </Container>
        </Container>
        <Divider variant="middle" sx={{ height: 20 }} />

        <YourReviewsMyAcc />
      </Container>
    </>
  );
}
