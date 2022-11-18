import { useState } from "react";
import {
  Pencil2Icon,
  TrashIcon,
  CheckIcon,
  CheckboxIcon,
  BoxIcon,
} from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  updateTaskStateThunk,
  updateTaskThunk,
} from "../../app/features/task/update";
import {
  deleteTaskThunk,
  notifyTaskThunk,
} from "../../app/features/task/delete";
import RadixTooltip from "../Radix/RadixTooltip";
import { toast } from "react-toastify";
type Props = {
  task: Task;
};

const TaskRow = ({ task }: Props) => {
  const [content, setContent] = useState(task.content);
  const [edit, setEdit] = useState(false);

  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.user.users);
  const user = useAppSelector((state) => state.user);

  const taskUser = users.find((user) => user.id === task.user_id);

  const updateTaskHandler = () => {
    if (!task.is_complete) {
      dispatch(updateTaskThunk({ task_id: task.id, content }));
    } else {
      toast.warn("You can't edit a completed task");
    }
    setEdit(false);
  };

  const deleteTaskHandler = () => {
    if (user.is_admin) {
      dispatch(deleteTaskThunk(task.id));
    } else {
      dispatch(notifyTaskThunk({ user_id: user.id, task_id: task.id }));
    }
    setEdit(false);
  };

  const editTaskBtnHandler = () =>
    (task.is_complete && toast.warn("You can't edit a completed task")) ||
    setEdit(true);

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
              dispatch(
                updateTaskStateThunk({ task_id: task.id, is_complete: true })
              )
            }
          />
        )}
      </td>
      <td className="text-center">{task.id}</td>

      <td className="text-center">
        {taskUser?.first_name || user.first_name}
        {taskUser?.last_name || user.last_name}
      </td>
      <td className="text-center">
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={!edit}
          className="app-input-text w-sm-full w-[85%] disabled:border-none disabled:bg-transparent"
        />
      </td>
      <td className="min-w-[3rem] text-center ">
        <RadixTooltip tip="Edit Task">
          {edit ? (
            <CheckIcon
              className="icon hover:text-green-800"
              onClick={updateTaskHandler}
            />
          ) : (
            <Pencil2Icon
              className="icon hover:text-green-800"
              onClick={editTaskBtnHandler}
            />
          )}
        </RadixTooltip>
      </td>
      <td className="min-w-[3rem] text-center ">
        <RadixTooltip tip="Delete Task">
          <TrashIcon
            className="icon hover:text-red-900"
            onClick={deleteTaskHandler}
          />
        </RadixTooltip>
      </td>
    </tr>
  );
};

export default TaskRow;
