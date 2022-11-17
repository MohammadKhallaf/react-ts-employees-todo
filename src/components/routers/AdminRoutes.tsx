import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "../../app/store";

type Props = {
  children: React.ReactNode;
};

const AdminRoutes = (props: Props) => {
  const user_id = useAppSelector((state) => state.user.id);
  const is_admin = useAppSelector((state) => state.user.is_admin);
  console.log(is_admin);
  if (!user_id || !is_admin) {
    toast.warn("You don't have admin rights");
    return <Navigate to="/" />;
  } else {
    return <>{props.children}</>;
  }
};

export default AdminRoutes;
