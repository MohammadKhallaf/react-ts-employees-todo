import React from "react";

type Props = {};

const GroupPage = (props: Props) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="page-header title-font">Groups</h1>
        </div>
        {/* <TaskForm /> */}
        <div className="lg:w-4/6 mx-auto">{/* <TaskList /> */}</div>
      </div>
    </section>
  );
};

export default GroupPage;
