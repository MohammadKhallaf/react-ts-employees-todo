import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto ">{props.children}</main>
      {/* <footer>Footer</footer> */}
     
    </>
  );
};

export default Layout;
