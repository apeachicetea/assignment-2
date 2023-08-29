import axios from "axios";

export const token = process.env.REACT_APP_GIT_HUB_ACCESS_TOKEN;

export const api = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react/issues",
  headers: {
    accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
  },
});
