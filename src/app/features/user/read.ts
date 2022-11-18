import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/app/services/api";

export const getAllUsers = createAsyncThunk("user/list", async () => {
  const { data: user } = await supabase.auth.getUser();
  const { data: profiles, error } = await supabase.from("profiles").select("*");
  return profiles;
});
// Read All Tasks
export const getUserProfile = createAsyncThunk(
  "user/profile",
  async (_, thunkAPI) => {
    const { data: user } = await supabase.auth.getUser();
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.user?.id)
      .limit(1)
      .single();
    if (profile.is_admin) {
      thunkAPI.dispatch(getAllUsers());
    }
    return profile;
  }
);
