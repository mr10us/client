import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [],
};

export const typeSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    setTypes: (state, { payload }) => {
      state.types = payload;
    },
    addType: (state, { payload }) => {
      state.types.push(payload);
    },
    dropType: (state, { payload }) => {
      const index = state.types.findIndex((type) => type.id === payload.id);
      if (index !== -1) {
        state.types.splice(index, 1);
      }
    },
  },
});

export const { setTypes, addType, dropType } = typeSlice.actions;

export const selectTypes = (state) => state.types.types;

export const selectTypeId = (state, name) => {
  const type = state.types.types.find((type) => type.nameUrl == name);
  if (!type) return null;

  return type.id;
};
export const selectTypeIdByName = (state, name) => {
  const type = state.types.types.find((type) => type.name == name);
  if (!type) return null;

  return type.id;
};


export default typeSlice.reducer;
