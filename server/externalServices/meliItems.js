import axios from "axios";

export const itemSearch = async (query) => {
  return axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=:${query}`)
    .then((resp) => resp)
    .catch((error) => error);
};

export const specificItem = async (id) => {
  return axios
    .get(`https://api.mercadolibre.com/items/${id}`)
    .then((resp) => resp)
    .catch((error) => error);
};

export const itemDescription = async (id) => {
  return axios
    .get(`https://api.mercadolibre.com/items/${id}/description`)
    .then((resp) => resp)
    .catch((error) => error);
};

const service = {
  itemSearch,
  specificItem,
  itemDescription,
};

export default service;
