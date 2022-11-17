import * as Tooltip from "@radix-ui/react-tooltip";
import React, { useState } from "react";
import {
  Pencil2Icon,
  TrashIcon,
  CheckIcon,
  CheckboxIcon,
  BoxIcon,
  BackpackIcon,
} from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "../../app/store";
import withTooltip from "../Radix/RadixTooltip";
import RadixTooltip from "../Radix/RadixTooltip";

type Props = {
  user: User;
};

const UserRow = ({ user }: Props) => {
  const users = useAppSelector((state) => state.user.users);
  const taskUser = users.find((userInst) => userInst.id === user.id);

  return (
    <tr>
      {/* <td className="text-center">{user.id}</td> */}

      <td className="text-center">
        {`${taskUser?.first_name} ${taskUser?.last_name}`}
      </td>
      <td className="text-center h-12">
        {taskUser?.is_admin ? "Admin" : "Employee"}
      </td>

      <td className="text-center min-w-[3rem] px-0.5">
        <BackpackIcon className="icon hover:text-purple-700" />
      </td>

      <td className="text-center min-w-[3rem] ">
        <RadixTooltip tip="Remove user">
          <TrashIcon className="icon hover:text-red-700" />
        </RadixTooltip>
      </td>
    </tr>
  );
};

export default UserRow;
