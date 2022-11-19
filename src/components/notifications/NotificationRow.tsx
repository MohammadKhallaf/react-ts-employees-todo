import { useState } from "react";

import { useAppDispatch, useAppSelector } from "~/app/store";
import { deleteTaskOnNotifThunk } from "@store/notifications/delete";

import { TrashIcon } from "@radix-ui/react-icons";

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
          className="app-input-text w-sm-full w-[85%] pl-0 disabled:border-none disabled:bg-transparent"
        />
      </td>

      <td className="min-w-[3rem] text-center ">
        <TrashIcon
          className="icon text-red-900 transition-all hover:scale-110 hover:text-red-700"
          onClick={deleteTaskHandler}
        />
      </td>
    </tr>
  );
};

export default NotificationRow;
