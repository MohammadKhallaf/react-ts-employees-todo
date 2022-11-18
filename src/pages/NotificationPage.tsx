import { useEffect } from "react";
import { getAllNotifs } from "~/app/features/notifications/read";
import { useAppDispatch } from "../app/store";
import NotificationsList from "../components/notifications/NotificationsList";

const NotificationPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllNotifs());
  }, []);
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="page-header title-font">Notifications List</h1>
        </div>

        <div className="mx-auto lg:w-4/6">
          <NotificationsList />
        </div>
      </div>
    </section>
  );
};

export default NotificationPage;
