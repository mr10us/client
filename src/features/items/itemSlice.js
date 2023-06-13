import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const isExists = state.items.find((item) => item.id === payload.id);
      if (isExists) alert("Товар вже додано");
      else state.items = [...state.items, payload];
    },
    dropItem: (state, { payload }) => {
      const itemId = payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    dropState: (state) => {
      state.items = [...initialState.items];
    },
  },
});

export const {
  addItem,
  dropItem,
  dropState,
} = itemSlice.actions;

export const selectItems = (state) => state.items.items;

export const selectItemsAmount = (state) => state.items.items.length;

export const selectOneItem = (state, id) => {
  const item = state.items.items.find((item) => item.id == id);
  return item;
};

export default itemSlice.reducer;
