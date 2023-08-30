import { createSlice } from "@reduxjs/toolkit";

// createSlice는 store 내의 작은 store
const pageSlice = createSlice({
  name: "perPage",
  initialState: { perPage: 8 },
  reducers: {
    addPage: (state, action) => {
      state.perPage += 8;
    },
  },
});

export const { addPage } = pageSlice.actions;
export default pageSlice;
