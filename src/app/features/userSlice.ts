import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { supabase } from "../services/api";
export interface Group {}
export interface User {
  id: string | number | null;
  first_name: string | null;
  last_name: string | null;
  is_admin: boolean;
  group: number | null;
  users: User[];
}

const initialState: User = {
  id: null,
  first_name: "guest",
  last_name: null,
  group: null,
  is_admin: false,
  users: [],
};

// Read All Tasks
export const getUserProfile = createAsyncThunk("user/profile", async () => {
  const { data: user } = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.user?.id)
    .limit(1)
    .single();
  console.log(profile);
  return profile;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    });
  },
});

// // Action creators are generated for each case reducer function
// export const { addUser } = usersSlice.actions;

export default userSlice.reducer;
