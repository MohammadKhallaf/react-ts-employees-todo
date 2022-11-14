import { Outlet } from "react-router-dom";
import Layout from "./layout/Layout";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
