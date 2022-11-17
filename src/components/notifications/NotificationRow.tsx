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
import { deleteTaskOnNotifThunk, Notification } from "../../app/features/notificationSlice";
type Props = {
  notification: Notification;
};

const NotificationRow = ({ notification }: Props) => {
  const [content, setContent] = useState(notification.content);
  const [edit, setEdit] = useState(false);
  const users = useAppSelector((state) => state.user.users);
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const taskUser = users.find((user) => user.id === notification.user_id);
  const updateTaskHandler = () => {
    // dispatch(updateTaskThunk({ task_id: task.id, content }));
    setEdit(false);
  };
  const deleteTaskHandler = () => {
    if (user.is_admin) {
      dispatch(deleteTaskOnNotifThunk(notification.task_id));
    }
    setEdit(false);
  };
  return (
    <tr>
      <td className="text-left">
        {taskUser?.first_name || user.first_name}{" "}
        {taskUser?.last_name || user.last_name}
      </td>
      <td className="text-left">
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={!edit}
          className="app-input-text w-[85%] w-sm-full disabled:border-none disabled:bg-transparent pl-0"
        />
      </td>

      <td className="text-center min-w-[3rem] ">
        <TrashIcon
          className="icon text-red-900 hover:text-red-700 hover:scale-110 transition-all"
          onClick={deleteTaskHandler}
        />
      </td>
    </tr>
  );
};

export default NotificationRow;
