import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as reviewService from "../../services/reviewService";
import Path from "../../paths/paths";

export default function Edit() {
  const navigate = useNavigate();
  const { reviewId } = useParams();
  const [review, setReview] = useState({
    title: "",
    review: "",
  });

  useEffect(() => {
    reviewService.getAll().then((result) => {
      const selectedReview = result.find((review) => review._id === reviewId);

      if (selectedReview) {
        setReview(selectedReview);
      }
    });
  }, [reviewId]);

  const editReviewSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await reviewService.edit(reviewId, values);

      navigate(Path.Reviews);
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };

  const onChange = (e) => {
    setReview((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{ bgcolor: "white", my: 25.44 }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Edit Review
        </Typography>
        <Box
          component="form"
          onSubmit={editReviewSubmitHandler}
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
            onChange={onChange}
            value={review.title}
          />
          <TextField
            margin="normal"
            fullWidth
            multiline
            rows={5}
            name="review"
            label="Review"
            id="description"
            autoComplete="description"
            onChange={onChange}
            value={review.review}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Edit
          </Button>
          <Grid container></Grid>
        </Box>
      </Box>
    </Container>
  );
}
