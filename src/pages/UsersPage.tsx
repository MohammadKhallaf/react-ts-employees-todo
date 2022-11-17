import { useAppDispatch, useAppSelector } from "../app/store";
import UserList from "../components/user/UserList";

type Props = {};

const UsersPage = (props: Props) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="page-header title-font">Users List</h1>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              User
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="app-input-text "
            />
          </div>

          <button
            className="text-white bg-indigo-500 whitespace-nowrap border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            // onClick={inviteUserHandler}
          >
            Invite User
          </button>
        </div>
        <div className="lg:w-4/6 mx-auto">
          <UserList />
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
