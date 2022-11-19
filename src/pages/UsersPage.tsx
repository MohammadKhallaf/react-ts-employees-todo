import { useEffect } from "react";

import { useAppDispatch } from "~/app/store";
import { getAllGroups } from "@store/group/read";

import PageHeader from "~/components/shared/PageHeader";
import PageWrapper from "~/components/shared/PageWrapper";
import UserForm from "~/components/user/UserForm";
import UserList from "~/components/user/UserList";

const UsersPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // prepare the groups to be shown in the select menu
    dispatch(getAllGroups());
  }, []);

  return (
    <PageWrapper>
      <PageHeader title="Users List" />
      <UserForm />
      <div className="mx-auto max-w-full overflow-x-scroll lg:w-4/6">
        <UserList />
      </div>
    </PageWrapper>
  );
};

export default UsersPage;
