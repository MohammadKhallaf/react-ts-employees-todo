import { createSlice } from "@reduxjs/toolkit";
import { deleteTaskThunk } from "./delete";
import { insertTaskThunk } from "./insert";
import { fetchAllTasksThunk } from "./read";
import { updateTaskStateThunk, updateTaskThunk } from "./update";

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
    /* <--- FETCHING ---> */
    builder.addCase(fetchAllTasksThunk.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchAllTasksThunk.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if (action.payload?.length) state.tasks = action.payload;
    });

    /* <--- INSERTING ---> */
    builder.addCase(insertTaskThunk.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      state.tasks.push(payload);
      return state;
    });

    /* <--- UPDATING ---> */
    /* <--- content update ---> */
    builder.addCase(updateTaskThunk.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      const updatedTask = state.tasks.find((task) => payload.id === task.id);
      if (updatedTask) updatedTask.content = payload.content;
      return state;
    });

    /* <--- complete status ---> */
    builder.addCase(updateTaskStateThunk.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      const updatedTask = state.tasks.find((task) => payload.id === task.id);
      if (updatedTask) updatedTask.is_complete = payload.is_complete;
      return state;
    });

    /* <--- DELETING ---> */
    builder.addCase(deleteTaskThunk.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      state.tasks = state.tasks.filter((task) => payload.id !== task.id);
    });
  },
});

export default tasksSlice.reducer;
