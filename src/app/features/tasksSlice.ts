import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../services/api";

const user_id = import.meta.env.VITE_MY_ID;

export interface Task {
  id: number | string;
  user_id: number | string;
  content: string;
  created_at: string;
  is_complete: boolean;
}
interface TasksState {
  tasks: Task[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}
const initialState: TasksState = {
  tasks: [],
  loading: "idle",
};

// Read All Tasks
export const fetchAllTasks = createAsyncThunk("tasks/fetchAll", async () => {
  const { data: tasks, error } = await supabase.from("tasks").select("*");

  return tasks;
});

// Create New Task
export const insertTask = createAsyncThunk(
  "tasks/insert",
  async ({
    content,
    user_id,
  }: {
    content: string;
    user_id: string | number;
  }) => {
    const { data, error } = await supabase
      .from("tasks")
      .insert({ content, user_id })
      .select();
    if (data?.length && data[0]) return data[0] as Task;
  }
);
// Update a Task
export const updateTask = createAsyncThunk(
  "tasks/update",
  async ({
    task_id,
    content,
  }: {
    task_id: string | number;
    content: string;
  }) => {
    const { data, error } = await supabase
      .from("tasks")
      .update({ content })
      .eq("id", task_id)
      .select();

    if (data?.length && data[0]) return data[0] as Task;
  }
);
// Update a Task
export const updateTaskState = createAsyncThunk(
  "tasks/update-state",
  async ({
    task_id,
    is_complete,
  }: {
    task_id: string | number;
    is_complete: boolean;
  }) => {
    const { data, error } = await supabase
      .from("tasks")
      .update({ is_complete })
      .eq("id", task_id)
      .select();

    if (data?.length && data[0]) return data[0] as Task;
  }
);
// Delete a Task
export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (task_id: string | number) => {
    const { data, error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", task_id)
      .select();

    if (data?.length && data[0]) return data[0] as Task;
  }
);

/* BUILD THE SLICE */
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTasks.fulfilled, (state, action) => {
      if (action.payload?.length) state.tasks = action.payload;
    });
    builder.addCase(insertTask.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      state.tasks.push(payload);
      return state;
    });
    builder.addCase(updateTask.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      const updatedTask = state.tasks.find((task) => payload.id === task.id);
      if (updatedTask) updatedTask.content = payload.content;
      return state;
    });
    builder.addCase(updateTaskState.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      const updatedTask = state.tasks.find((task) => payload.id === task.id);
      if (updatedTask) updatedTask.is_complete = payload.is_complete;
      return state;
    });
    builder.addCase(deleteTask.fulfilled, (state, { payload }) => {
      if (!payload) return state;
      state.tasks = state.tasks.filter((task) => payload.id !== task.id);
    });
  },
});

// Action creators are generated for each case reducer function

export default tasksSlice.reducer;
