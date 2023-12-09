import { Box, Button, Card, Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { pathToUrl } from "../../utils/pathUtil";
import * as reviewService from "../../services/reviewService";
import AuthContext from "../../context/authContext";
import Path from "../../paths/paths";

export default function ListCard() {
  const navigate = useNavigate();
  const [review, setReview] = useState([]);
  const { id: reviewId } = useParams();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    reviewService.getAll().then((result) => {
      const selectedReview = result.find((review) => review._id === reviewId);

      if (selectedReview) {
        setReview(selectedReview);
      }
    });
  }, [reviewId]);

  const deleteOnClick = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${review.title} review`
    );

    if (hasConfirmed) {
      await reviewService.remove(reviewId);

      navigate(Path.Reviews);
    }
  };

  return (
    <Container sx={{ pt: 10 }}>
      <Typography className="review-title" component="h1" variant="h3">
        {review.title}
      </Typography>
      <Container className="review-card">
        <Card className="card-content">
          <Box>
            <Typography variant="h5">{review.review}</Typography>
          </Box>
        </Card>
      </Container>

      {userId === review._ownerId && (
        <Box sx={{ display: "flex", gap: 2, ml: 3 }}>
          <Button
            component={Link}
            to={pathToUrl(Path.Edit, { reviewId })}
            variant="contained"
          >
            Edit
          </Button>
          <Button variant="contained" onClick={deleteOnClick}>
            Delete
          </Button>
        </Box>
      )}
    </Container>
  );
}
