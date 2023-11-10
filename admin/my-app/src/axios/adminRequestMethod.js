import axios from "axios";
const BASE_URL = "http://localhost:7000/api/";
export const adminRequest = axios.create({
  baseURL: BASE_URL,
});
