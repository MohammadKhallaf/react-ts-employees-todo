import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { getUserProfile } from "./app/features/userSlice";
import { supabase } from "./app/services/api";
import { useAppDispatch } from "./app/store";
import Layout from "./layout/Layout";

function App() {
  const dispatch = useAppDispatch();

  useEffect( () => {

    dispatch(getUserProfile());
  }, []);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
