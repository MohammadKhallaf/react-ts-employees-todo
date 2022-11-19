import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../services/api";

type taskUserProps = { user_id: uuid; task_id: uuid };

// Delete a Task
export const deleteTaskThunk = createAsyncThunk(
  "tasks/delete",
  async (task_id: string | number | uuid) => {
    const { data, error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", task_id)
      .select();

    if (data?.length && data[0]) return data[0] as Task;
  }
);

// Notify Admin to delete a Task
export const notifyTaskThunk = createAsyncThunk(
  "tasks/notify",
  async ({ user_id, task_id }: taskUserProps) => {
    const { data, error } = await supabase
      .from("notifications")
      .insert({ user_id, task_id })
      .select();

    if (data?.length && data[0]) return data[0] as Task;
  }
);
