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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Hello {user.first_name} {user.last_name}
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Dashboard
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <ContentCard
            to="/tasks"
            title="Tasks"
            content="Manage Your tasks"
            Icon={<ListBulletIcon className="w-6 h-6" />}
          />
          {user.is_admin && (
            <>
              <ContentCard
                to="/users"
                title="Users"
                content="Manage Users"
                Icon={<PersonIcon className="w-6 h-6" />}
              />
              <ContentCard
                to="/groups"
                title="Groups"
                content="Manage Groups"
                Icon={<DashboardIcon className="w-6 h-6" />}
              />
              <ContentCard
                to="/notifications"
                title="Notifications"
                content="Manage Notifications"
                Icon={<BellIcon className="w-6 h-6" />}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
