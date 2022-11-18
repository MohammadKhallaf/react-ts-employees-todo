import { CheckboxIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
// import { fetchAllTasksThunk } from "../app/features/Task/read";
import { useAppDispatch, useAppSelector } from "../../app/store";
import UserRow from "./UserRow";

type Props = {};

const UserList = (props: Props) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  useEffect(() => {
    // dispatch(fetchAllTasksThunk());
  }, []);

  return (
    <table className="mt-5 w-full ">
      <thead className="uppercase">
        <tr>
          {/* if the user is admin */}
          <th className="min-w-[10rem]">user name</th>
          <th className="min-w-[7rem]">role</th>
          <th className="min-w-[20rem]">group</th>
          {/* <th className="w-18">edit</th> */}
        </tr>
      </thead>
      <tbody>
        {(users.length &&
          users
            // .slice()
            // .sort((a, b) => {
            //   const aDate = new Date(a.created_at);
            //   const bDate = new Date(b.created_at);
            //   return aDate - bDate;
            // })
            .map((user) => <UserRow key={user.id} user={user} />)) || (
          <tr>
            <td>No Data</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserList;
