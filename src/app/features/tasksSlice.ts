import { createSlice } from "@reduxjs/toolkit";

import { deleteTaskThunk } from "./task/delete";
import { insertTaskThunk } from "./task/insert";
import { fetchAllTasksThunk } from "./task/read";
import { updateTaskStateThunk, updateTaskThunk } from "./task/update";

interface TasksState {
  tasks: Task[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}
const initialState: TasksState = {
  tasks: [],
  loading: "idle",
};

/* BUILD THE SLICE */
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTasksThunk.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAllTasksThunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload?.length) state.tasks = action.payload;
    });
    builder.addCase(insertTaskThunk.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      state.tasks.push(payload);
      return state;
    });
    builder.addCase(updateTaskThunk.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      const updatedTask = state.tasks.find((task) => payload.id === task.id);
      if (updatedTask) updatedTask.content = payload.content;
      return state;
    });
    builder.addCase(updateTaskStateThunk.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      const updatedTask = state.tasks.find((task) => payload.id === task.id);
      if (updatedTask) updatedTask.is_complete = payload.is_complete;
      return state;
    });
    builder.addCase(deleteTaskThunk.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      state.tasks = state.tasks.filter((task) => payload.id !== task.id);
    });
  },
});

export default tasksSlice.reducer;
