import { configureStore } from "@reduxjs/toolkit";
import getIssuesSlice from "./IssuesSlice";
import getAnIssueSlice from "./IssueSlice";

const store = configureStore({
  reducer: {
    issues: getIssuesSlice.reducer,
    issue: getAnIssueSlice.reducer,
  },
});

export default store;
