import { lazy } from "react";
import HomePage from "./HomePage";

const GroupsPage = lazy(() => import("./GroupsPage"));
const LoginPage = lazy(() => import("./LoginPage"));
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
