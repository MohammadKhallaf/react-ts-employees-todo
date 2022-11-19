import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/app/services/api";
import { deleteTaskThunk } from "../task/delete";
import { getAllNotifs } from "./read";

export const deleteTaskOnNotifThunk = createAsyncThunk(
  "notifs/del",
  async (task_id: string | number | uuid, thunkAPI) => {
    const { data, error } = await supabase
      .from("notifications")
      .delete()
      .eq("task_id", task_id)
      .select();
    if (data) thunkAPI.dispatch(deleteTaskThunk(task_id));
    thunkAPI.dispatch(getAllNotifs());
  }
);
