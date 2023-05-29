import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload
      state.isAuth = true;
    },
    dropUser: (state) => {
      state.user = {}
      state.isAuth = false;
    },
  },
});

export const { addUser, dropUser } = userSlice.actions;

export const selectUser = (state) => state.user

export default userSlice.reducer;
