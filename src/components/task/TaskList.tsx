import { CheckboxIcon } from "@radix-ui/react-icons";

import TaskRow from "./TaskRow";

type Props = {
  tasks: Task[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <table className="mt-5 w-full ">
      <thead className="uppercase">
        <tr>
          <th className="w-fit">
            <CheckboxIcon width="1.8rem" height="1.8rem" />
          </th>
          <th className="w-28">id</th>

          <th className="min-w-[10rem]">user name</th>
          <th className="min-w-[20rem]">content</th>
        </tr>
      </thead>
      <tbody>
        {(tasks.length &&
          tasks.map((task) => <TaskRow key={task.id} task={task} />)) || (
          <tr>
            <td>No Data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TaskList;
