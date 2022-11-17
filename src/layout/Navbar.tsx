import { PersonIcon } from "@radix-ui/react-icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../app/store";
import LogButton from "../components/LogButton";


const Navbar = () => {
  const user_id = useAppSelector((state) => state.user.id);
  const user_exist = !!user_id;
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          {(user_id && (
            <PersonIcon className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
          )) || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          )}
          <span className="ml-3 text-xl">Employees ToDo</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/tasks" className="mr-5 hover:text-gray-900">
            Tasks
          </NavLink>
          <NavLink to="/users" className="mr-5 hover:text-gray-900">
            Users
          </NavLink>
          <NavLink to="/groups" className="mr-5 hover:text-gray-900">
            Groups
          </NavLink>
          <NavLink to="/notification" className="mr-5 hover:text-gray-900">
            Notifications
          </NavLink>
        </nav>
        <LogButton user_exist={user_exist} />
      </div>
    </header>
  );
};

export default Navbar;
