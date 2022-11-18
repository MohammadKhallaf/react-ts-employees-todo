import { Link } from "react-router-dom";
import { logOutUser } from "../app/features/userSlice";
import { useAppDispatch } from "../app/store";

const LogButton = ({ user_exist }: { user_exist: boolean }) => {
  const dispatch = useAppDispatch();
  if (user_exist) {
    return (
      <Link
        to="/"
        className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
        onClick={() => dispatch(logOutUser())}
      >
        Logout
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="ml-1 h-4 w-4"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    );
  }
  return (
    <Link
      to="login"
      className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
    >
      Login
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="ml-1 h-4 w-4"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  );
};
export default LogButton;
