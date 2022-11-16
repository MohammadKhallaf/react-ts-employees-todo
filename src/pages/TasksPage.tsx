import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

type Props = {};

const TasksPage = (props: Props) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            To Do List
          </h1>
        </div>
        <TaskForm />
        <div className="lg:w-4/6 mx-auto">
          <TaskList />
        </div>
      </div>
    </section>
  );
};

export default TasksPage;
