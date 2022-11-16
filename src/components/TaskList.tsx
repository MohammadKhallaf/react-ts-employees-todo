import React from "react";
import { useAppSelector } from "../app/store";
import TaskRow from "./TaskRow";

type Props = {};

const TaskList = (props: Props) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <table className="w-full mt-5 ">
      <thead className="uppercase">
        <tr>
          <th className="w-28">id</th>
          {/* if the user is admin */}
          <th className="min-w-[10rem]">user name</th>
          <th className="min-w-[20rem]">content</th>
          {/* <th className="w-18">edit</th> */}
        </tr>
      </thead>
      <tbody>
        {(tasks.length &&
          tasks
            // .slice()
            // .sort((a, b) => {
            //   const aDate = new Date(a.created_at);
            //   const bDate = new Date(b.created_at);
            //   return aDate - bDate;
            // })
            .map((task) => <TaskRow key={task.id} task={task} />)) || (
          <tr>
            <td>No Data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TaskList;
