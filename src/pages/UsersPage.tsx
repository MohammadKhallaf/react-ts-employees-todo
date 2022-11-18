import { useEffect } from "react";
import { getAllGroups } from "../app/features/groupSlice";
import { useAppDispatch } from "../app/store";
import UserForm from "../components/user/UserForm";
import UserList from "../components/user/UserList";

const UsersPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGroups());
  }, []);
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="page-header title-font">Users List</h1>
        </div>
        <UserForm />
        <div className="mx-auto lg:w-4/6">
          <UserList />
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
