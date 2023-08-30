import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIssues } from "../Utils/IssuesUtil";

// createAsyncThunk는 비동기 작업을 하는 액션 크리에이터를 만들어준다.
export const getIssuesThunk = createAsyncThunk(
  "getIssuesSlice/getIssuesThunk",
  async (perPage) => {
    const data = await getIssues(perPage);
    return data;
  }
);

// createSlice는 store 내의 작은 store
const getIssuesSlice = createSlice({
  name: "issues",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getIssuesThunk.pending, (state, action) => {
      return [];
    });
    builder.addCase(getIssuesThunk.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(getIssuesThunk.rejected, (state, action) => {
      return [];
    });
  },
});

export default getIssuesSlice;
