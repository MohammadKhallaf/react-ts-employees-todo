import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/app/services/api";

export const getAllUsers = createAsyncThunk("user/list", async () => {
  const { data: profiles, error } = await supabase.from("profiles").select("*");
  return profiles;
});
// Read All Tasks
export const getUserProfile = createAsyncThunk(
  "user/profile",
  async (_, thunkAPI) => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return;
    const user = session.user;

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .limit(1)
      .single();
    if (profile?.is_admin) {
      thunkAPI.dispatch(getAllUsers());
    }

    return profile;
  }
);
