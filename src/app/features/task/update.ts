import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../services/api";

// Update a Task
export const updateTaskThunk = createAsyncThunk(
  "tasks/update",
  async ({
    task_id,
    content,
  }: {
    task_id: string | number;
    content: string;
  }) => {
    const { data, error } = await supabase
      .from("tasks")
      .update({ content })
      .eq("id", task_id)
      .select();

    if (data?.length && data[0]) return data[0] as Task;
  }
);
// Update a Task
export const updateTaskStateThunk = createAsyncThunk(
  "tasks/update-state",
  async ({
    task_id,
    is_complete,
  }: {
    task_id: string | number;
    is_complete: boolean;
  }) => {
    const { data, error } = await supabase
      .from("tasks")
      .update({ is_complete })
      .eq("id", task_id)
      .select();

    if (data?.length && data[0]) return data[0] as Task;
  }
);
