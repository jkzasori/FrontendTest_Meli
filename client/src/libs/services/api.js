import axios from "axios";

const base = process.env.REACT_APP_API_ENDPOINT_URL;
export const meliHTTP = axios.create({
  baseURL: base,
});
