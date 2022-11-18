import PageHeader from "~/components/shared/PageHeader";
import PageWrapper from "~/components/shared/PageWrapper";
import NotificationsList from "../components/notifications/NotificationsList";

const NotificationPage = () => {
  return (
    <PageWrapper>
      <PageHeader title="Notifications List" />

      <div className="mx-auto lg:w-4/6">
        <NotificationsList />
      </div>
    </PageWrapper>
  );
};

export default NotificationPage;
