import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getUserProfile } from "./app/features/userSlice";
import { useAppDispatch } from "./app/store";
import Layout from "./layout/Layout";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
