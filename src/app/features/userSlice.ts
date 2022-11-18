import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../services/api";
import { getAllUsers, getUserProfile } from "./user/read";

const initialState: User = {
  id: null,
  first_name: "guest",
  last_name: null,
  group: null,
  is_admin: false,
  users: [],
};

export const logOutUser = createAsyncThunk("user/logout", async () => {
  const { error } = await supabase.auth.signOut();
  location.reload();
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

export default userSlice.reducer;
