import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
    message: "",
  },
  reducers: {
    startLoading: (state, action) => {
      ((state.isLoading = true), (state.message = action.payload || ""));
    },
    stopLoading: (state) => {
      ((state.isLoading = false), (state.message = ""));
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
