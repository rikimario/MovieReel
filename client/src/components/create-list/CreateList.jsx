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

import * as movieService from "../../services/movieService";
import Path from "../../paths/paths";

export default function CreateList() {
  const navigate = useNavigate();

  const createSubmitListHandler = async (e) => {
    e.preventDefault();

    const listData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const result = await movieService.create(listData);
      console.log(result);

      navigate(Path.MyAccount);
    } catch (error) {
      console.log(error);
    }
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
          Create List
        </Typography>
        <Box
          component="form"
          onSubmit={createSubmitListHandler}
          sx={{ mt: 6.3 }}
        >
          <TextField
            type="text"
            margin="normal"
            required
            fullWidth
            id="list"
            label="List title"
            name="list-title"
            autoComplete="list-title"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            multiline
            rows={5}
            name="description"
            label="Description"
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
