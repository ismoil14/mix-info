import { createSlice } from "@reduxjs/toolkit";

export const sideBar = createSlice({
  name: "counter",
  initialState: {
    open: false,
  },
  reducers: {
    setOpenSideBar: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setOpenSideBar } = sideBar.actions;

export default sideBar.reducer;
