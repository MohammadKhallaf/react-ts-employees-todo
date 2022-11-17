import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { supabase } from "../services/api";
export interface Group {}

const initialState: User = {
  id: null,
  first_name: "guest",
  last_name: null,
  group: null,
  is_admin: false,
  users: [],
};

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

export const getAllUsers = createAsyncThunk("user/list", async () => {
  const { data: user } = await supabase.auth.getUser();
  let { data: profiles, error } = await supabase.from("profiles").select("*");
  return profiles;
});

export const logOutUser = createAsyncThunk("user/logout", async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) return true;
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
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      if (payload) state.users = payload;
    });
    builder.addCase(logOutUser.fulfilled, (state, { payload }) => {
      if (payload) state = initialState;
      return state;
    });
  },
});

// // Action creators are generated for each case reducer function
// export const { addUser } = usersSlice.actions;

export default userSlice.reducer;
