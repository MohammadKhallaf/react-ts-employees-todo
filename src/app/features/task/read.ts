import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../services/api";

// Read All Tasks
export const fetchAllTasksThunk = createAsyncThunk("tasks/fetchAll", async () => {
    const { data: tasks, error } = await supabase.from("tasks").select("*");
    return tasks;
  });
  