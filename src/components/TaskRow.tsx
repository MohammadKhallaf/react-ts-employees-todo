import React from "react";
import { Task } from "../app/features/tasksSlice";

type Props = {
  task: Task;
};

const TaskRow = ({ task }: Props) => {
  return (
    <tr>
      <td className="text-center">{task.id}</td>
      <td className="text-center">{task.userId}</td>
      <td className="text-center">{task.content}</td>
      <td className="text-center">Edit</td>
    </tr>
  );
};

export default TaskRow;
