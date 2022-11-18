import {
  BellIcon,
  DashboardIcon,
  ListBulletIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useAppSelector } from "../app/store";
import ContentCard from "../components/ContentCard";

const HomePage = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
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
      </div>
    </section>
  );
};

export default HomePage;
