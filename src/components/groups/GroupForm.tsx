import type React from "react";

import { useAppDispatch } from "~/app/store";
import { insertGroup } from "@store/group/insert";

import SubmitButton from "../shared/SubmitButton";

const GroupsForm = () => {
  const dispatch = useAppDispatch();

  const createGroupHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const form = e.target as typeof e.target & { label: { value: string } };
    const groupLabel = form.label.value;

    dispatch(insertGroup(groupLabel));
  };

  return (
    <form onSubmit={createGroupHandler}>
      <div className="mx-auto flex w-full flex-col items-end space-y-4 px-8 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0 lg:w-2/3">
        <div className="relative w-full flex-grow">
          <label htmlFor="label" className="text-sm leading-7 text-gray-600">
            Group
          </label>
          <input
            type="label"
            id="label"
            name="label"
            minLength={3}
            className="h-12 w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <SubmitButton text="Add Group" />
      </div>
    </form>
  );
};

export default GroupsForm;
