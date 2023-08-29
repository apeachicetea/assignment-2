import axios from "axios";

export const token = REACT_APP_GIT_HUB_ACCESS_TOKEN;

export const api = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
