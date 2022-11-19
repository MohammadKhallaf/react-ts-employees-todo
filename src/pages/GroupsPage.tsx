import { useEffect } from "react";

import { useAppDispatch } from "~/app/store";
import { getAllGroups } from "@store/group/read";

import GroupsForm from "~/components/groups/GroupForm";
import PageHeader from "~/components/shared/PageHeader";
import PageWrapper from "~/components/shared/PageWrapper";

const GroupPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGroups());
  }, []);

  return (
    <PageWrapper>
      <PageHeader title="Group List" />
      <GroupsForm />
      {/* <div className="mx-auto lg:w-4/6"><TaskList /></div> */}
    </PageWrapper>
  );
};

export default GroupPage;
