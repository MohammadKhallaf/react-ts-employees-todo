import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "~/app/store";
import { fetchAllTasksThunk } from "@store/task/read";

import Loader from "~/components/shared/Loader";
import PageHeader from "~/components/shared/PageHeader";
import PageWrapper from "~/components/shared/PageWrapper";
import TaskForm from "~/components/task/TaskForm";
import TaskList from "~/components/task/TaskList";

const TasksPage = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.tasks.loading);
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchAllTasksThunk());
  }, []);

  return (
    <PageWrapper>
      <PageHeader title="Tasks List" />
      <TaskForm />
      <div className="mx-auto min-h-[10rem] max-w-full overflow-x-auto lg:w-4/6">
        {loading === "pending" ? <Loader /> : <TaskList tasks={tasks} />}
      </div>
    </PageWrapper>
  );
};

export default TasksPage;
