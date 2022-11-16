import React from "react";
import { useAppDispatch } from "../app/store";
import TaskList from "../components/TaskList";

type Props = {};

const UsersPage = (props: Props) => {
  const dispatch = useAppDispatch();
  const addTaskHandler = () => {
    // dispatch(addTask("content"));
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            To Do List
          </h1>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              User
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="app-input-text "
            />
          </div>

          <button
            className="text-white bg-indigo-500 whitespace-nowrap border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={addTaskHandler}
          >
            Add User
          </button>
        </div>
        <div className="lg:w-4/6 mx-auto">
          <TaskList />
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
