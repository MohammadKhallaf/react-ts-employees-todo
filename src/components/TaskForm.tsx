import React, { FormEvent, useState } from "react";
import { insertTask } from "../app/features/tasksSlice";
import { useAppDispatch, useAppSelector } from "../app/store";

type Props = {};

const TaskForm = (props: Props) => {
  const [user, setUser] = useState<string>("0");
  const [task, setTask] = useState<string>("");
  const [valid, setValid] = useState(false);

  const users = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();

  const addTaskHandler = () => {
    dispatch(insertTask(task));
  };
  const userSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setUser(e.target.value);
  };
  const taskDetailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setValid(true);
    } else {
      setValid(false);
    }

    setTask(e.target.value);
  };
  const ceateTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={ceateTaskHandler}>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="user" className="leading-7 text-sm text-gray-600">
            User
          </label>
          <select
            name="user"
            id="user"
            value={user}
            onChange={userSelectHandler}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-12"
          >
            {users.length &&
              users.map((user) => (
                <option key={user.id} value={user.id || ""}>
                  {user.first_name} {user.last_name}
                </option>
              ))}
          </select>
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="task" className="leading-7 text-sm text-gray-600">
            Task
          </label>
          <input
            type="text"
            id="task"
            name="task"
            value={task}
            onChange={taskDetailHandler}
            className="w-full h-12 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button
          className="h-12 text-white bg-indigo-500 whitespace-nowrap border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-slate-300"
          disabled={!valid}
          onClick={addTaskHandler}
          type="submit"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
