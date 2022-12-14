import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Layout from "~/layout/Layout";
import Loader from "./components/shared/Loader";

function App() {
  useEffect(() => {
    document.getElementById("loader")?.remove();
  }, []);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}

export default App;
