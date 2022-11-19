import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import tasksReducer from "./features/task";
import userReducer from "./features/user";
import notifsReducer from "./features/notifications";
import groupReducer from "./features/group";

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    notifs: notifsReducer,
    groups: groupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
