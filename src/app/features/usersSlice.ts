import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface Group {}
export interface User {
  id: string | number;
  name: string;
  role: "admin" | "user";
}

const initialState: User[] = [
  {
    id: 0,
    name: "khaled",
    role: "admin",
  },
  {
    id: 1,
    name: "Tarek",
    role: "user",
  },
  {
    id: 2,
    name: "Hussien",
    role: "user",
  },
  {
    id: 5,
    name: "Ali",
    role: "admin",
  },
];

export const usersSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
