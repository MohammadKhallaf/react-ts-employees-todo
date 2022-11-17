import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../services/api";

const initialState: Group[] = [];
// Read All Tasks
export const getAllGroups = createAsyncThunk("group/list_all", async () => {
  let { data: groups, error } = await supabase.from("groups").select("*");
  if (groups) return groups;
});
export const insertGroup = createAsyncThunk(
  "groups/insert",
  async (label: string) => {
    const { data, error } = await supabase.from("groups").insert({ label });
  }
);

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
