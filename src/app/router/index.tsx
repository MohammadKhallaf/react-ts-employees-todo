import { createBrowserRouter } from "react-router-dom";
import { getUserProfile } from "@store/user/read";

import App from "~/App";
import Layout from "~/layout/Layout";
import ErrorPage from "~/pages/ErrorPage";
import {
  GroupsPage,
  HomePage,
  LoginPage,
  NotificationPage,
  TasksPage,
  UsersPage,
} from "~/pages";

import AuthRoutes from "~/components/routers/AuthRoutes";
import { store } from "../store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => await store.dispatch(getUserProfile()),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "users",
        element: (
          <AuthRoutes role="user">
            <UsersPage />
          </AuthRoutes>
        ),
      },
      {
        path: "tasks",
        element: (
          <AuthRoutes role="user">
            <TasksPage />
          </AuthRoutes>
        ),
      },

      {
        path: "groups",
        element: (
          <AuthRoutes role="user">
            <GroupsPage />
          </AuthRoutes>
        ),
      },
      {
        path: "notifications",
        element: (
          <AuthRoutes role="admin">
            <NotificationPage />
          </AuthRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: async () => await store.dispatch(getUserProfile()),
  },
]);
