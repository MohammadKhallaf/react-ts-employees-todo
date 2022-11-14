import React from "react";
import { addTask } from "../app/features/tasksSlice";
import { useAppDispatch } from "../app/store";
import TaskList from "../components/TaskList";

type Props = {};

const TasksPage = (props: Props) => {
  const dispatch = useAppDispatch();
  const addTaskHandler = () => {
    dispatch(addTask("content"));
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Task
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            className="text-white bg-indigo-500 whitespace-nowrap border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={addTaskHandler}
          >
            Add Task
          </button>
        </div>
        <div className="lg:w-4/6 mx-auto">
          <TaskList />
        </div>
      </div>
    </section>
  );
};

export default TasksPage;
