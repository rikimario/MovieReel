import * as request from "../lib/request";

const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=589f3d4f48689702b074a222aea6db87";

export const getPopular = async () => {
  const result = await request.get(popularUrl);

  return result;
};
