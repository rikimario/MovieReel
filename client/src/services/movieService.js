import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/lists";

const apiKey = "589f3d4f48689702b074a222aea6db87";
const apiUrl = "https://api.themoviedb.org/3/movie";

export const create = async (movieList) => {
  const result = await request.post(baseUrl, movieList);

  return result;
};

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};
