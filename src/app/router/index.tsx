import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../../App";
import AuthRoutes from "../../components/routers/AuthRoutes";
import Layout from "../../layout/Layout";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
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

        element: <UsersPage />,
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
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
