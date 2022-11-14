import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import LoginPage from "../../pages/LoginPage";
import TasksPage from "../../pages/TasksPage";
import UsersPage from "../../pages/UsersPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
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
]);