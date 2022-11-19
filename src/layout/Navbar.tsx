import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "~/app/store";
import { getAllNotifs } from "@store/notifications/read";

import LogButton from "~/components/LogButton";
import { PersonIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const notifications = useAppSelector((state) => state.notifs.list);

  const user_id = user.id;
  const user_exist = !!user_id;

  useEffect(() => {
    if (user.is_admin) dispatch(getAllNotifs());
  }, []);

  return (
    <header className="body-font z-10  w-full bg-slate-200 text-gray-600 shadow-sm">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link
          to="/"
          className="mb-4 flex flex-col items-center gap-1 font-medium text-gray-900 sm:flex-row sm:gap-2 md:mb-0 md:gap-3"
        >
          {(user_id && (
            <PersonIcon className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white" />
          )) || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          )}
          <span className="text-xl font-bold text-indigo-900">EmTasks</span>
        </Link>
        <nav className="flex flex-col flex-wrap items-center justify-center gap-1 text-base sm:gap-2 md:ml-auto md:mr-5 md:flex-row md:gap-3">
          <NavLink to="/tasks" className="nav-item">
            Tasks
          </NavLink>
          {user.is_admin ? (
            <>
              <NavLink to="/users" className="nav-item">
                Users
              </NavLink>
              <NavLink to="/groups" className="nav-item">
                Groups
              </NavLink>
              <NavLink to="/notifications" className="nav-item relative">
                Notifications
                {notifications.length ? (
                  <span className="absolute -top-1 -right-4 inline-block whitespace-nowrap rounded-full bg-blue-600 py-1 px-1.5 text-center align-baseline text-xs font-bold leading-none text-white">
                    {notifications.length}
                  </span>
                ) : null}
              </NavLink>
            </>
          ) : null}
        </nav>

        <LogButton user_exist={user_exist} />
      </div>
    </header>
  );
};

export default Navbar;
