import React from "react";
import { useAppSelector } from "../app/store";
import TaskRow from "./TaskRow";

type Props = {};

const TaskList = (props: Props) => {
  const tasks = useAppSelector((state) => state.tasks);
  return (
    <table className="w-full mt-5">
      <thead className="uppercase">
        <tr>
          <th>id</th>
          {/* if the user is admin */}
          <th>user name</th>
          <th>content</th>
          <th>edit</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length &&
          tasks.map((task) => <TaskRow key={task.id} task={task} />)}
      </tbody>
    </table>
  );
};

export default TaskList;
