import { CheckboxIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import { fetchAllTasksThunk } from "../../app/features/task/read";
import { useAppDispatch, useAppSelector } from "../../app/store";
import TaskRow from "../task/TaskRow";
import NotificationRow from "./NotificationRow";

type Props = {};

const NotificationsList = (props: Props) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const notifications = useAppSelector((state) => state.notifs);
  useEffect(() => {
    dispatch(fetchAllTasksThunk());
  }, []);

  return (
    <table className="w-full mt-5 ">
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
          notifications
            // .slice()
            // .sort((a, b) => {
            //   const aDate = new Date(a.created_at);
            //   const bDate = new Date(b.created_at);
            //   return aDate - bDate;
            // })
            .map((notification) => (
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
