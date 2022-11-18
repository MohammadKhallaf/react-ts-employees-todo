import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { supabase } from "../services/api";
import { getAllNotifs } from "./notifications/read";
import { deleteTaskThunk } from "./task/delete";
export interface Notification {
  id: uuid;
  user_id: uuid;
  task_id: uuid;
  content: string;
}
interface NotificationState {
  list: Notification[];
  channel: RealtimeChannel | null;
}
const initialState: NotificationState = {
  list: [],
  channel: null,
};

export const deleteTaskOnNotifThunk = createAsyncThunk(
  "notifs/del",
  async (task_id: string | number | uuid, thunkAPI) => {
    const { data, error } = await supabase
      .from("notifications")
      .delete()
      .eq("task_id", task_id)
      .select();
    if (data) thunkAPI.dispatch(deleteTaskThunk(task_id));
    thunkAPI.dispatch(getAllNotifs());
  }
);
export const subscribeToNotifications = createAsyncThunk(
  "notifs/subscribe",
  async (_, thunkAPI) => {
    const notifications = supabase
      .channel("public:notifications")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "notifications" },
        (payload) => {
          thunkAPI.dispatch(getAllNotifs());
        }
      )
      .subscribe();
    // if (notifications) return notifications;
  }
);
export const notifSlice = createSlice({
  name: "notifs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllNotifs.fulfilled, (state, { payload }) => {
      if (payload) state.list = payload;
      return state;
    });
    // builder.addCase(
    //   subscribeToNotifications.fulfilled,
    //   (state, { payload }) => {
    //     if (payload) state.channel = payload;
    //     return state;
    //   }
    // );
  },
});

export default notifSlice.reducer;
