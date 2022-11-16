import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../../App";
import Layout from "../../layout/Layout";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import TasksPage from "../../pages/TasksPage";
import UsersPage from "../../pages/UsersPage";
import { supabase } from "../services/api";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,
    errorElement: (
      <Layout>
        <div>Error 404</div>
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },

      {
        path: "register",
        element: <RegisterPage />,
      },

      {
        path: "users",

        element: <UsersPage />,
      },
      {
        path: "tasks",

        element: <TasksPage />,
      },
    ],
  },
  {
    path: "login",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },
]);
