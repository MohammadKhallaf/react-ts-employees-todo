import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "~/app/store";
import { fetchAllTasksThunk } from "@store/task/read";

import NotificationRow from "./NotificationRow";

const NotificationsList = () => {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.notifs.list);

  useEffect(() => {
    dispatch(fetchAllTasksThunk());
  }, []);

  return (
    <table className="mt-5 w-full ">
      <thead className="uppercase">
        <tr>
          {/* if the user is admin */}
          <th className="min-w-[10rem] text-left">Employee</th>
          <th className="min-w-[20rem] text-left">Task</th>
          {/* <th className="w-18">edit</th> */}
        </tr>
      </thead>
      <tbody>
        {(notifications.length &&
          notifications.map((notification) => (
            <NotificationRow
              key={notification.task_id}
              notification={notification}
            />
          ))) || (
          <tr>
            <td>No Data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default NotificationsList;
