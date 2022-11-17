import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import tasksReducer from "./features/tasksSlice";
import userReducer from "./features/userSlice";
import notifsReducer from "./features/notificationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    notifs: notifsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
