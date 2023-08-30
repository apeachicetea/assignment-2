import { configureStore } from "@reduxjs/toolkit";
import getIssuesSlice from "./IssuesSlice";
import getAnIssueSlice from "./IssueSlice";
import loadingSlice from "./LoadingSlice";
import pageSlice from "./PageSlice";

const store = configureStore({
  reducer: {
    issues: getIssuesSlice.reducer,
    issue: getAnIssueSlice.reducer,
    loading: loadingSlice.reducer,
    perPage: pageSlice.reducer,
  },
});

export default store;
