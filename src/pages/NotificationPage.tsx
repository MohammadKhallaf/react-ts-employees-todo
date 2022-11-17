import React, { useEffect } from "react";
import { getAllNotifs } from "../app/features/notificationSlice";
import { useAppDispatch } from "../app/store";
import NotificationsList from "../components/notifications/NotificationsList";
import TaskForm from "../components/task/TaskForm";
import TaskList from "../components/task/TaskList";

type Props = {};

const NotificationPage = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllNotifs());
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="page-header title-font">Notifications List</h1>
        </div>

        <div className="lg:w-4/6 mx-auto">
          <NotificationsList />
        </div>
      </div>
    </section>
  );
};

export default NotificationPage;
