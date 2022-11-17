import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../services/api";

const initialState: Group[] = [];
// Read All Tasks
export const getAllGroups = createAsyncThunk(
  "group/list_all",
  async (_, thunkAPI) => {
    let { data: groups, error } = await supabase.from("groups").select("*");
  }
);
export const insertGroup = createAsyncThunk("group/insert", async (label) => {
  const { data, error } = await supabase.from("groups").insert({ label });
});

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default groupSlice.reducer;
