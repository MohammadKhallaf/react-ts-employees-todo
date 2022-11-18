import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto ">{props.children}</main>
      <footer className="mt-auto">
        <div className="bg-gray-100">
          <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
            <p className="text-center text-sm text-gray-500 sm:text-left">
              © {new Date().getFullYear()} EmTasks —
              <a
                href="https://www.linkedin.com/in/mohammedkhallaf/"
                rel="noopener noreferrer"
                className="ml-1 text-gray-600"
                target="_blank"
              >
                @mohammedkhallaf
              </a>
            </p>
            <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
              <a
                href="https://github.com/MohammadKhallaf"
                rel="noopener noreferrer"
                className="ml-1 text-gray-600"
                target="_blank"
              >
                <GitHubLogoIcon className="icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammedkhallaf/"
                rel="noopener noreferrer"
                target="_blank"
                className="ml-3 text-gray-600"
              >
                <LinkedInLogoIcon className="icon" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
