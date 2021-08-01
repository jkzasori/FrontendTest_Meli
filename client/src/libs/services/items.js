import { meliHTTP } from "./api";

export const itemSearch = async (query) => {
  return meliHTTP
    .get(`/api/items?q=${query}`)
    .then((resp) => resp)
    .catch((error) => error);
};

export const specificItem = async (id) => {
  return meliHTTP
    .get(`/api/items/${id}`)
    .then((resp) => resp)
    .catch((error) => error);
};

const service = {
  itemSearch,
  specificItem,
};

export default service;
