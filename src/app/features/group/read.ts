import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/app/services/api";

// Read All Tasks
export const getAllGroups = createAsyncThunk("group/list_all", async () => {
  const { data: groups, error } = await supabase.from("groups").select("*");
  if (groups) return groups;
});
