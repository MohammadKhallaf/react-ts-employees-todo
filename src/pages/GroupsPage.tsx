import { useEffect } from "react";
import { getAllGroups } from "~/app/features/group/read";
import { useAppDispatch } from "../app/store";

const GroupPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGroups());
  }, []);
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="page-header title-font">Groups</h1>
        </div>
        {/* <TaskForm /> */}
        <div className="mx-auto lg:w-4/6">{/* <TaskList /> */}</div>
      </div>
    </section>
  );
};

export default GroupPage;
