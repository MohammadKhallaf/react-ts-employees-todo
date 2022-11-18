import { createBrowserRouter } from "react-router-dom";
import {
  GroupsPage,
  HomePage,
  LoginPage,
  NotificationPage,
  TasksPage,
  UsersPage,
} from "~/pages";
import ErrorPage from "~/pages/ErrorPage";
import App from "~/App";
import AuthRoutes from "~/components/routers/AuthRoutes";
import Layout from "~/layout/Layout";

import { getUserProfile } from "../features/user/read";
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
