import axios from "axios";

const X_API_KEY =
  "WENFCJKNSKDCSDNJCKNCJNCKJDcndscsnadkcndjncjkackdsdkvsnvajkdvnsjkvnkdsj";

export const baseURL = "http://localhost:3333/api/";

export const api = axios.create({
  baseURL,
  headers: {
    Authorization: X_API_KEY,
  },
});
