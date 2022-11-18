import { createSlice } from "@reduxjs/toolkit";

import { getAllGroups } from "./group/read";

const initialState: Group[] = [];

export const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGroups.fulfilled, (state, { payload }) => {
      if (payload) return payload;
    });
  },
});

export default groupSlice.reducer;
