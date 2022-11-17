import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../services/api";

// Create New Task
export const insertTaskThunk = createAsyncThunk(
  "tasks/insert",
  async ({
    content,
    user_id,
  }: {
    content: string;
    user_id: string | number;
  }) => {
    const { data, error } = await supabase
      .from("tasks")
      .insert({ content, user_id })
      .select();
    if (data?.length && data[0]) return data[0] as Task;
  }
);
