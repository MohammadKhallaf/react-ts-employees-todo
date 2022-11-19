import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~/app/services/api";
import { getAllNotifs } from "./read";

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
