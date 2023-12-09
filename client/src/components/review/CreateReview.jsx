import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import * as reviewService from "../../services/reviewService";
import Path from "../../paths/paths";

export default function CreateReview() {
  const navigate = useNavigate();

  const createSubmitReviewHandler = async (e) => {
    e.preventDefault();

    const reviewData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const result = await reviewService.create(reviewData);
      console.log(result);

      navigate(Path.MyAccount);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="main-container-create" component="main" maxWidth="sm">
      <CssBaseline />
      <Box className="box-content">
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Create Review
        </Typography>
        <Box
          component="form"
          onSubmit={createSubmitReviewHandler}
          sx={{ mt: 6.3 }}
        >
          <TextField
            type="text"
            margin="normal"
            required
            fullWidth
            id="review"
            label="Review title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            rows={5}
            name="review"
            label="Review"
            id="description"
            autoComplete="description"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
          <Grid container></Grid>
        </Box>
      </Box>
    </Container>
  );
}
