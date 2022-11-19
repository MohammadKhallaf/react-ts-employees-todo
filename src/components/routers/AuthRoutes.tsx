import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "~/app/store";

import { toast } from "react-toastify";

type Props = {
  role: "admin" | "user";
  children: React.ReactNode;
};

const AuthRoutes = ({ role, children }: Props) => {
  const user_id = useAppSelector((state) => state.user.id);
  const is_admin = useAppSelector((state) => state.user.is_admin);

  if (!user_id) {
    toast.error("You are not logged in!");
    return <Navigate to={"/login"} />;
  } else if (role === "admin" && !is_admin) {
    toast.warn("You don't have admin rights");
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
};

export default AuthRoutes;
