import { useAppSelector } from "../../app/store";
import UserRow from "./UserRow";

const UserList = () => {
  const users = useAppSelector((state) => state.user.users);

  return (
    <table className="mt-5 w-full ">
      <thead className="uppercase">
        <tr>
          {/* //TODO: if the user is admin */}
          <th className="min-w-[10rem]">user name</th>
          <th className="min-w-[7rem]">role</th>
          <th className="min-w-[20rem]">group</th>
        </tr>
      </thead>
      <tbody>
        {(users.length &&
          users.map((user) => <UserRow key={user.id} user={user} />)) || (
          <tr>
            <td>No Data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserList;
