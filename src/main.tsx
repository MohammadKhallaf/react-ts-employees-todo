import ReactDOM from "react-dom/client";
import { StrictMode, Suspense } from "react";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "~/app/store";
import { router } from "~/app/router";

import { ToastContainer } from "react-toastify";

import "~/index.css";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
        <ToastContainer
          position="bottom-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Suspense>
    </Provider>
  </StrictMode>
);
