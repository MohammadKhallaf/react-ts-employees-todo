import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number | string;
  userId: number | string;
  content: string;
}

const initialState: Task[] = [{ id: 0, userId: 5, content: "54gf6ed4g" }];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({ id: nanoid(5), userId: 1, content: action.payload });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
