import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/app/services/api";

export const insertGroup = createAsyncThunk(
  "groups/insert",
  async (label: string) => {
    const { data, error } = await supabase.from("groups").insert({ label });
  }
);
