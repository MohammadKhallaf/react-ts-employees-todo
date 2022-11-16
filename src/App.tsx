import { useEffect } from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";
import { getUserProfile } from "./app/features/userSlice";
import { useAppDispatch, useAppSelector } from "./app/store";
import Layout from "./layout/Layout";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return <Layout>{(user.id && <Outlet />) || <Navigate to="/login" />}</Layout>;
}

export default App;
