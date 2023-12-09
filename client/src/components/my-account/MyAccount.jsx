import { Container, Divider, Typography } from "@mui/material";
import YourReviewsMyAcc from "./YourReviewMyAcc";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

export default function MyAccount() {
  const { email, username } = useContext(AuthContext);
  return (
    <>
      <Container className="my-acc-main" component="main" maxWidth="md">
        <Typography component="h1" variant="h3">
          My Account
        </Typography>
        <Container className="my-acc-box">
          <Container className="my-acc-content">
            <Typography component="h1" variant="h4" sx={{ p: 2 }}>
              Username: {username}
            </Typography>

            <Typography component="h1" variant="h4" sx={{ p: 2 }}>
              Email: {email}
            </Typography>
          </Container>
        </Container>
        <Divider variant="middle" sx={{ height: 100 }} />

        <YourReviewsMyAcc />
      </Container>
    </>
  );
}
