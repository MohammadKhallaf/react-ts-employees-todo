import { useEffect } from "react";
import { fetchAllTasksThunk } from "~/app/features/task/read";
import { useAppDispatch, useAppSelector } from "~/app/store";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";

const TasksPage = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.tasks.loading);
  const tasks = useAppSelector((state) => state.tasks.tasks);
  useEffect(() => {
    dispatch(fetchAllTasksThunk());
  }, []);
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="page-header title-font">To Do List</h1>
        </div>
        <TaskForm />
        <div className="mx-auto lg:w-4/6">
          {(loading == "pending" && (
            <div className="mt-8 flex items-center justify-center">
              <div
                className="border-1 text-indiago-600 inline-block h-12 w-12 animate-spin rounded-full border-4 border-r-transparent"
                role="status"
              ></div>
            </div>
          )) || <TaskList tasks={tasks} />}
        </div>
      </div>
    </section>
  );
};

export default TasksPage;
