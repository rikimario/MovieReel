import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedListId, setSelectedListId] = useState();

  const setMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const setListId = (listId) => {
    setSelectedListId(listId);
  };
  return (
    <MovieContext.Provider
      value={{ selectedMovie, selectedListId, setMovie, setListId }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
