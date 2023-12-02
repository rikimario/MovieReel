import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as movieService from "../../services/movieService";

const apiKey = "589f3d4f48689702b074a222aea6db87";
const apiUrl = "https://api.themoviedb.org/3/movie";
const url = "http://localhost:3030/data";

export default function ListButton() {
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState();
  const [movies, setMovies] = useState([]);
  const [anchorEl, setAnchorEl] = useState();
  //   const { setMovie, selectedMovie, setListId, selectedListId } =
  //     useMovieContext();
  const { id: movieId } = useParams();

  const movieUrl = `${apiUrl}/${movieId}?api_key=${apiKey}`;

  useEffect(() => {
    movieService
      .getAll()
      .then((result) => setLists(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(movieUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [movieUrl]);

  const handleListSelect = async (listId) => {
    setSelectedList(listId);

    if (listId) {
      try {
        // Fetch movie details using movieId
        const response = await fetch(`${apiUrl}/${movieId}?api_key=${apiKey}`);
        const movieDetails = await response.json();

        // Fetch the current list from the server
        const listResponse = await fetch(`${url}/lists/${listId}`);
        const currentList = await listResponse.json();

        const updatedList = {
          movieDetails,
        };

        // const createResult = await movieService.createList(currentList);
        console.log(updatedList);

        // Send a PUT request to update the list on the server
        await fetch(`${url}/lists/${listId}/movies`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedList),
        });

        // Call createList function to add the current movie to the selected list

        // console.log("Movie Details:", movieDetails);
      } catch (error) {
        console.log(error);
      }
    }

    handleCloseMenu();
  };

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenMenu}>
        Add to list
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {/* {movies.map((movie) => (
          <MenuItem key={movie.id} onClick={() => handleListSelect(movie.id)}>
            {movie.title}
          </MenuItem>
        ))} */}

        {lists.map((list) => (
          <MenuItem key={list._id} onClick={() => handleListSelect(list._id)}>
            {list.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
