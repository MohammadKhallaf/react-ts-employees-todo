import { useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { subscribeToNotifications } from "./app/features/notificationSlice";
import { getUserProfile } from "./app/features/user/read";
import { supabase } from "./app/services/api";
import { useAppDispatch } from "./app/store";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
