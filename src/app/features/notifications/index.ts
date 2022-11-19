import { createSlice } from "@reduxjs/toolkit";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { getAllNotifs } from "./read";

interface NotificationState {
  list: Notification[];
  channel: RealtimeChannel | null;
}
const initialState: NotificationState = {
  list: [],
  channel: null,
};

export const notifSlice = createSlice({
  name: "notifs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllNotifs.fulfilled, (state, { payload }) => {
      if (payload) state.list = payload;
      return state;
    });
  },
});

export default notifSlice.reducer;
