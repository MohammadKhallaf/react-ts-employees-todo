import { useAppSelector } from "~/app/store";

import PageWrapper from "~/components/shared/PageWrapper";
import ContentCard from "~/components/shared/ContentCard";

import {
  BellIcon,
  DashboardIcon,
  ListBulletIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

const HomePage = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <PageWrapper>
      <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
        <h1 className="page-header">
          Hello {user.first_name} {user.last_name}
        </h1>
        <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
          {user.id
            ? "Welcome to your Dashboard"
            : "Login to perform operations"}
        </p>
      </div>
      <div className="-m-4 flex flex-wrap justify-center">
        <ContentCard
          to="/tasks"
          title="Tasks"
          content="Manage Your tasks"
          Icon={<ListBulletIcon className="h-6 w-6" />}
        />
        {user.is_admin && (
          <>
            <ContentCard
              to="/users"
              title="Users"
              content="Manage Users"
              Icon={<PersonIcon className="h-6 w-6" />}
            />
            <ContentCard
              to="/groups"
              title="Groups"
              content="Manage Groups"
              Icon={<DashboardIcon className="h-6 w-6" />}
            />
            <ContentCard
              to="/notifications"
              title="Notifications"
              content="Manage Notifications"
              Icon={<BellIcon className="h-6 w-6" />}
            />
          </>
        )}
      </div>
    </PageWrapper>
  );
};

export default HomePage;
