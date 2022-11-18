import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";
import Layout from "./layout/Layout";

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
