import React, { useState } from "react";
import {
  deleteTask,
  Task,
  updateTask,
  updateTaskState,
} from "../app/features/tasksSlice";
import {
  Pencil2Icon,
  TrashIcon,
  CheckIcon,
  CheckboxIcon,
  BoxIcon,
} from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "../app/store";
type Props = {
  task: Task;
};

const TaskRow = ({ task }: Props) => {
  const [content, setContent] = useState(task.content);
  const [edit, setEdit] = useState(false);
  const users = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();
  const taskUser = users.find((user) => user.id === task.user_id);
  const updateTaskHandler = () => {
    dispatch(updateTask({ task_id: task.id, content }));
    setEdit(false);
  };
  const deleteTaskHandler = () => {
    dispatch(deleteTask(task.id));
    setEdit(false);
  };
  return (
    <tr>
      <td className="text-center">
        {(task.is_complete && (
          <CheckboxIcon
            width="1.8rem"
            height="1.8rem"
            className=" text-cyan-700"
          />
        )) || (
          <BoxIcon
            width="1.8rem"
            height="1.8rem"
            className="px-0.5 hover:cursor-pointer hover:text-cyan-700"
            onClick={() =>
              dispatch(updateTaskState({ task_id: task.id, is_complete: true }))
            }
          />
        )}
      </td>
      <td className="text-center">{task.id}</td>

      <td className="text-center">
        {taskUser?.first_name} {taskUser?.last_name}
      </td>
      <td className="text-center">
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={!edit}
          className="app-input-text w-[85%] w-sm-full disabled:border-none disabled:bg-transparent"
        />
      </td>
      <td className="text-center min-w-[3rem] hover:text-green-800">
        {!edit && (
          <Pencil2Icon
            width="1.8rem"
            height="1.8rem"
            onClick={() => setEdit(true)}
          />
        )}
        {edit && (
          <CheckIcon
            width="1.8rem"
            height="1.8rem"
            onClick={updateTaskHandler}
          />
        )}
      </td>
      <td className="text-center min-w-[3rem] hover:text-red-900">
        <TrashIcon width="1.8rem" height="1.8rem" onClick={deleteTaskHandler} />
      </td>
    </tr>
  );
};

export default TaskRow;
