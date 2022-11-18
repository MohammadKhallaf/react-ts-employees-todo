import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "../../app/store";

type Props = {
  children: React.ReactNode;
};

const AuthRoutes = (props: Props) => {
  const user_id = useAppSelector((state) => state.user.id);
  const location = useLocation();
  if (!user_id) {
    toast.error("You are not logged in!");
    return <Navigate to={"/login"} />;
  } else {
    return <>{props.children}</>;
  }
};

export default AuthRoutes;
