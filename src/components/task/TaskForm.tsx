import { useState } from "react";
import { insertTaskThunk } from "../../app/features/task/insert";
import { useAppDispatch, useAppSelector } from "../../app/store";

const TaskForm = () => {
  const users = useAppSelector((state) => state.user.users);
  const userInst = useAppSelector((state) => state.user);
  const userInsID = userInst.id;
  const [user, setUser] = useState<string | number | null>(userInsID);
  const [task, setTask] = useState<string>("");
  const [valid, setValid] = useState(false);

  const dispatch = useAppDispatch();

  const addTaskHandler = () => {
    if (user) dispatch(insertTaskThunk({ content: task, user_id: user }));
  };
  const userSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      <div className="mx-auto flex w-full flex-col items-end space-y-4 px-8 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0 lg:w-2/3">
        {userInst.is_admin && (
          <div className="relative w-full flex-grow">
            <label htmlFor="user" className="text-sm leading-7 text-gray-600">
              User
            </label>
            <select
              name="user"
              id="user"
              value={user ? user : "null"}
              onChange={userSelectHandler}
              className="h-12 w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
            >
              {users.length &&
                users.map((user) => (
                  <option key={user.id} value={user.id || ""}>
                    {user.first_name} {user.last_name}
                  </option>
                ))}
            </select>
          </div>
        )}
        <div className="relative w-full flex-grow">
          <label htmlFor="task" className="text-sm leading-7 text-gray-600">
            Task
          </label>
          <input
            type="text"
            id="task"
            name="task"
            value={task}
            onChange={taskDetailHandler}
            className="h-12 w-full rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <button
          className="h-12 whitespace-nowrap rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none disabled:bg-slate-300"
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
