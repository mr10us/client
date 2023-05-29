import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    fetchItems: (state, { payload }) => {
      state.items = payload;
    },
    createItem: (state, { payload }) => {
      state.items.push(payload);
    },
    dropItem: (state, { payload }) => {
      const isExists = state.items.findIndex(
        (item) => item?.id === payload?.id
      );
      if (isExists === -1) throw new Error("no such item");
      else state.items.splice(isExists);
    },
  },
});

export const { fetchItems, createItem, dropItem } = itemSlice.actions;

export default itemSlice.reducer;
