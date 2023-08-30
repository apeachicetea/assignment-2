import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAnIssue } from "../Utils/IssuesUtil";

// createAsyncThunk는 비동기 작업을 하는 액션 크리에이터를 만들어준다.
export const getAnIssueThunk = createAsyncThunk(
  "getAnIssueSlice/getAnIssueThunk",
  async (issueId) => {
    const data = await getAnIssue(issueId);
    return data;
  }
);

// createSlice는 store 내의 작은 store
const getAnIssueSlice = createSlice({
  name: "issue",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getAnIssueThunk.pending, (state, action) => {
      return [];
    });
    builder.addCase(getAnIssueThunk.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(getAnIssueThunk.rejected, (state, action) => {
      return [];
    });
  },
});

export default getAnIssueSlice;
