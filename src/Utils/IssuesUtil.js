import axios from "axios";
import { api } from "./Api";

const OPEN = "open";
const COMMENTS = "comments";

export const getIssues = async (perPage) => {
  const { data } = await api.get("", {
    params: { state: OPEN, sort: COMMENTS, per_page: perPage },
  });
  return data;
};

export const getAnIssue = async (issueId) => {
  const { data } = await api.get(issueId);
  return data;
};
