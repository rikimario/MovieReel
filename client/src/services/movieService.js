import * as request from "../lib/request";

const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=589f3d4f48689702b074a222aea6db87";
const topRatedUrl =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=589f3d4f48689702b074a222aea6db87";
const comingSoonUrl =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=589f3d4f48689702b074a222aea6db87";

const apiKey = "589f3d4f48689702b074a222aea6db87";
const apiUrl = "https://api.themoviedb.org/3/movie";

export const getOnePopular = async (movieId) => {
  const result = await request.get(`${apiUrl}/${movieId}?api_key=${apiKey}`);

  return result;
};

export const getPopular = async () => {
  const result = await request.get(popularUrl);

  return result;
};

export const getTopRated = async () => {
  const result = await request.get(topRatedUrl);

  return result;
};

export const getComingSoon = async () => {
  const result = await request.get(comingSoonUrl);

  return result;
};
