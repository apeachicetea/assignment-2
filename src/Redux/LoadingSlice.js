import { createSlice } from "@reduxjs/toolkit";

// createSlice는 store 내의 작은 store
const loadingSlice = createSlice({
  name: "loading",
  initialState: { isLoading: false },
  reducers: {
    loading: (state, action) => {
      state.isLoading = true;
    },
    unLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { loading, unLoading } = loadingSlice.actions;
export default loadingSlice;
