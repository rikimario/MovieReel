import { Container, Typography } from "@mui/material";

import * as movieService from "../../services/movieService";

import YourLists from "../create-list/YourLists";
import { useEffect, useState } from "react";

export default function YourListsMyAcc() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    movieService
      .getAll()
      .then((result) => setLists(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container sx={{ pt: 10 }}>
      <Typography component="h1" variant="h3">
        Your Lists
      </Typography>
      <Container sx={{ pt: 6, border: "1px solid grey" }}>
        <Container
          maxWidth="false"
          sx={{
            maxWidth: "70%",
            ml: 0,
            display: "flex",
            flexDirection: "row",
            py: 5,
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {lists.map((list) => (
              <YourLists key={list._id} {...list} />
            ))}

            {lists.length === 0 && <h3>No Lists Yet</h3>}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
