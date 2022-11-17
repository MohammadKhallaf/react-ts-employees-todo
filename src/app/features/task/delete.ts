import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../services/api";

// Delete a Task
export const deleteTaskThunk = createAsyncThunk(
    "tasks/delete",
    async (task_id: string | number) => {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", task_id)
        .select();
  
      if (data?.length && data[0]) return data[0] as Task;
    }
  );