import axios from "axios";

export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://afue-api.onrender.com/"
      : "http://localhost:8181/",
});
