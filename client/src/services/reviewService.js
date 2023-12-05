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

export const edit = async (reviewId, reviewData) => {
  const result = await request.put(`${baseUrl}/${reviewId}`, reviewData);

  return result;
};

export const remove = async (reviewId) =>
  request.remove(`${baseUrl}/${reviewId}`);

export const getAllById = async (ownerId) => {
  const query = new URLSearchParams({
    where: `_ownerId="${ownerId}"`,
    // load: `owner=_ownerId:users`,
  });

  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};
