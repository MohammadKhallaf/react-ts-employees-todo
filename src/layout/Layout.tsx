import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
