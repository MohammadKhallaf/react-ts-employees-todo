import React, { useState } from "react";
import { TrashIcon, BackpackIcon } from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { updateUserGroup } from "../../app/features/userSlice";
import RadixTooltip from "../Radix/RadixTooltip";

type Props = {
  user: User;
};

const UserRow = ({ user }: Props) => {
  const users = useAppSelector((state) => state.user.users);
  const groups = useAppSelector((state) => state.groups);
  const taskUser = users.find((userInst) => userInst.id === user.id);
  const [userGroup, setUserGroup] = useState(
    groups.find((group) => group.id == taskUser?.group)?.id
  );

  const dispatch = useAppDispatch();
  const groupSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserGroup(Number(e.target.value));
    dispatch(
      updateUserGroup({
        user_id: taskUser!.id!,
        group_id: Number(e.target.value),
      })
    );
  };
  return (
    <tr>
      {/* <td className="text-center">{user.id}</td> */}

      <td className="text-center">
        {`${taskUser?.first_name} ${taskUser?.last_name}`}
      </td>
      <td className="h-12 text-center">
        {taskUser?.is_admin ? "Admin" : "Employee"}
      </td>

      <td className="h-12 text-center">
        <select
          name="group"
          id="group"
          value={userGroup}
          onChange={groupSelectHandler}
          className="h-10 w-[15rem] rounded border border-gray-300 bg-gray-100 bg-opacity-50 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
        >
          <option value={-1}>select value</option>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.label}
            </option>
          ))}
        </select>
      </td>

      <td className="min-w-[3rem] px-0.5 text-center">
        <BackpackIcon className="icon hover:text-purple-700" />
      </td>

      <td className="min-w-[3rem] text-center ">
        <RadixTooltip tip="Remove user">
          <TrashIcon className="icon hover:text-red-700" />
        </RadixTooltip>
      </td>
    </tr>
  );
};

export default UserRow;
