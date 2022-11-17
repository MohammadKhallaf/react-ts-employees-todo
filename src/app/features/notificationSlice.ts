import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../services/api";
import { deleteTaskThunk } from "./task/delete";
export interface Notification {
  id: uuid;
  user_id: uuid;
  task_id: uuid;
  content: string;
}

const initialState: Notification[] = [];

export const getAllNotifs = createAsyncThunk("notifs/all",
 async () => {
  let { data: user_task_notifs, error } = await supabase
    .from("user_task_notifs")
    .select("*");

  return user_task_notifs;
});

export const deleteTaskOnNotifThunk = createAsyncThunk(
  "notifs/del",
  async (task_id: string | number | uuid, thunkAPI) => {
    console.log(task_id);
    const { data, error } = await supabase
      .from("notifications")
      .delete()
      .eq("task_id", task_id)
      .select();
    if (data) thunkAPI.dispatch(deleteTaskThunk(task_id));
    thunkAPI.dispatch(getAllNotifs());
  }
);

export const notifSlice = createSlice({
  name: "notifs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllNotifs.fulfilled, (state, { payload }) => {
      if (payload) return payload;
    });
  },
});

export default notifSlice.reducer;
