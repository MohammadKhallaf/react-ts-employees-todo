import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { getUserProfile } from "./app/features/userSlice";
import { useAppDispatch } from "./app/store";
import Layout from "./layout/Layout";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logged_user = useLoaderData() as { user: User };

  useEffect(() => {
    // if (!logged_user.user?.id) {
    //   navigate("/login");
    // }
    dispatch(getUserProfile());
  }, []);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
