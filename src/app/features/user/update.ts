import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/app/services/api";

export const updateUserGroup = createAsyncThunk(
  "user/group_update",
  async ({ user_id, group_id }: { user_id: uuid; group_id: number }) => {
    const { data: user, error } = await supabase
      .from("profiles")
      .update({ group: group_id })
      .eq("id", user_id)
      .select();

    if (user) return user;
  }
);
export const updateUserAdmin = createAsyncThunk(
  "user/group_update",
  async ({ user_id }: { user_id: uuid }) => {
    const { data: user, error } = await supabase
      .from("profiles")
      .update({ is_admin: true })
      .eq("id", user_id)
      .select();

    if (user) return user;
  }
);
