import { useAppDispatch, useAppSelector } from "../app/store";
import UserForm from "../components/user/UserForm";
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
        <UserForm />
        <div className="lg:w-4/6 mx-auto">
          <UserList />
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
