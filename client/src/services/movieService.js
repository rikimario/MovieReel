import * as request from "../lib/request";

const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=589f3d4f48689702b074a222aea6db87";
const topRated =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=589f3d4f48689702b074a222aea6db87";
const comingSoon =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=589f3d4f48689702b074a222aea6db87";

export const getPopular = async () => {
  const result = await request.get(popularUrl);

  return result;
};

export const getTopRated = async () => {
  const result = await request.get(topRated);

  return result;
};

export const getComingSoon = async () => {
  const result = await request.get(comingSoon);

  return result;
};
