import { lazy } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const GroupsPage = lazy(() => import("./GroupsPage"));
const NotificationPage = lazy(() => import("./NotificationPage"));
const TasksPage = lazy(() => import("./TasksPage"));
const UsersPage = lazy(() => import("./UsersPage"));

export {
  GroupsPage,
  HomePage,
  LoginPage,
  NotificationPage,
  TasksPage,
  UsersPage,
};
