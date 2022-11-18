import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/app/services/api";

export const getAllNotifs = createAsyncThunk("notifs/all", async () => {
  const { data: user_task_notifs, error } = await supabase
    .from("user_task_notifs")
    .select("*");
  return user_task_notifs;
});
