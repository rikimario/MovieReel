import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/reviews";

export const create = async (movieReview) => {
  const result = await request.post(baseUrl, movieReview);

  return result;
};

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

// export default getOne = async (reviewId) => {
//   const result = await request.get(`${baseUrl}/${reviewId}`);

//   return result;
// };

export const getAllById = async (ownerId) => {
  const query = new URLSearchParams({
    where: `_ownerId="${ownerId}"`,
    // load: `owner=_ownerId:users`,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};
