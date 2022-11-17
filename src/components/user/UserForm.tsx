import React, { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";

type Props = {};

const UserForm = (props: Props) => {
  const [valid, setValid] = useState(false);

  const dispatch = useAppDispatch();

  const taskDetailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setValid(true);
    } else {
      setValid(false);
    }
  };
  const ceateTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={ceateTaskHandler}>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="task" className="leading-7 text-sm text-gray-600">
            Task
          </label>
          <input
            type="text"
            id="task"
            name="task"
            className="w-full h-12 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button
          className="h-12 text-white bg-indigo-500 whitespace-nowrap border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:bg-slate-300"
          disabled={!valid}
          type="submit"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default UserForm;
