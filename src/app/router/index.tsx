import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../../App";
import AdminRoutes from "../../components/routers/AdminRoutes";
import AuthRoutes from "../../components/routers/AuthRoutes";
import Layout from "../../layout/Layout";
import GroupsPage from "../../pages/GroupsPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import NotificationPage from "../../pages/NotificationPage";
import TasksPage from "../../pages/TasksPage";
import UsersPage from "../../pages/UsersPage";
import { supabase } from "../services/api";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,
    loader: async () => {
      const { data: user } = await supabase.auth.getUser();
      return user;
    },
    errorElement: (
      <Layout>
        <div>Error 404</div>
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
          <AuthRoutes>
            <AdminRoutes>
              <UsersPage />
            </AdminRoutes>
          </AuthRoutes>
        ),
      },
      {
        path: "tasks",
        element: (
          <AuthRoutes>
            <TasksPage />
          </AuthRoutes>
        ),
      },
      {
        path: "groups",

        element: (
          <AuthRoutes>
            <AdminRoutes>
              <GroupsPage />
            </AdminRoutes>
          </AuthRoutes>
        ),
      },
      {
        path: "notifications",

        element: (
          <AuthRoutes>
            <AdminRoutes>
              <NotificationPage />
            </AdminRoutes>
          </AuthRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: async () => {
      console.log("router login");
      const { data: user } = await supabase.auth.getUser();
      return user;
    },
  },
]);
