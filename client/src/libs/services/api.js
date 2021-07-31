import axios from "axios";

const base = process.env.REACT_APP_API_ENDPOINT_URL;
console.log(base)
export const meliHTTP = axios.create({
  baseURL: base,
});
